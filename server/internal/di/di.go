package di

import (
	"log/slog"
	"net/http"
	"os"
	"path"
	"sync"

	"github.com/gorilla/mux"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/clients/llm"
	"github.com/openorch/openorch/sdk/go/datastore"
	"github.com/openorch/openorch/sdk/go/datastore/localstore"
	"github.com/openorch/openorch/sdk/go/lock"
	distlock "github.com/openorch/openorch/sdk/go/lock/local"
	"github.com/openorch/openorch/sdk/go/logger"
	"github.com/openorch/openorch/sdk/go/middlewares"
	"github.com/openorch/openorch/sdk/go/router"
	node_types "github.com/openorch/openorch/server/internal/node/types"
	chatservice "github.com/openorch/openorch/server/internal/services/chat"
	configservice "github.com/openorch/openorch/server/internal/services/config"
	deployservice "github.com/openorch/openorch/server/internal/services/deploy"
	dockerservice "github.com/openorch/openorch/server/internal/services/docker"
	downloadservice "github.com/openorch/openorch/server/internal/services/download"
	dynamicservice "github.com/openorch/openorch/server/internal/services/dynamic"
	firehoseservice "github.com/openorch/openorch/server/internal/services/firehose"
	modelservice "github.com/openorch/openorch/server/internal/services/model"
	policyservice "github.com/openorch/openorch/server/internal/services/policy"
	promptservice "github.com/openorch/openorch/server/internal/services/prompt"
	proxyservice "github.com/openorch/openorch/server/internal/services/proxy"
	registryservice "github.com/openorch/openorch/server/internal/services/registry"
	secretservice "github.com/openorch/openorch/server/internal/services/secret"
	sourceservice "github.com/openorch/openorch/server/internal/services/source"
	userservice "github.com/openorch/openorch/server/internal/services/user"
	"github.com/pkg/errors"
)

const openorchFolder = ".openorch"

type Options struct {
	// NodeOptions contains settings coming from envars
	NodeOptions node_types.Options

	// Url that will be passed down to the router when calling
	// the OpenOrch daemon from itself.
	// (Inter-service calls go through the network.)
	Url string

	// Test mode if true will cause the localstore to
	// save data into random temporary folders.
	Test bool

	Lock lock.DistributedLock

	LLMClient        llm.ClientI
	DatastoreFactory func(tableName string, instance any) (datastore.DataStore, error)
	HomeDir          string
	ClientFactory    sdk.ClientFactory
	Authorizer       sdk.Authorizer
}

func BigBang(options *Options) (*mux.Router, func() error, error) {
	var homeDir string
	var err error
	if options.Test {
		homeDir, err = os.MkdirTemp("", "openorch-")
		if err != nil {
			logger.Error(
				"Homedir creation failed",
				slog.String("error", err.Error()),
			)
			os.Exit(1)
		}
	} else {
		homeDir, err = os.UserHomeDir()
		if err != nil {
			logger.Error("Homedir creation failed", slog.String("error", err.Error()))
			os.Exit(1)
		}
	}
	options.HomeDir = homeDir

	if options.Lock == nil {
		options.Lock = distlock.NewLocalDistributedLock()
	}

	configService, err := configservice.NewConfigService(options.Lock)
	if err != nil {
		logger.Error(
			"Config service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	openorchFolder := path.Join(homeDir, openorchFolder)
	if options.NodeOptions.ConfigPath != "" {
		openorchFolder = options.NodeOptions.ConfigPath
	}

	configService.ConfigDirectory = openorchFolder

	if options.DatastoreFactory == nil {
		localStorePath := path.Join(configService.GetConfigDirectory(), "data")
		err = os.MkdirAll(localStorePath, 0755)
		if err != nil {
			logger.Error(
				"Creating data folder failed",
				slog.String("error", err.Error()),
			)
			os.Exit(1)
		}

		options.DatastoreFactory = func(tableName string, instance any) (datastore.DataStore, error) {
			return localstore.NewLocalStore(
				instance,
				path.Join(localStorePath, tableName),
			)
		}
	}

	if options.Authorizer == nil {
		options.Authorizer = sdk.AuthorizerImpl{}
	}

	if options.Url == "" {
		options.Url = router.SelfAddress()
	}

	if options.ClientFactory == nil {
		options.ClientFactory = sdk.NewApiClientFactory(options.Url)
	}

	configService.SetDatastoreFactory(options.DatastoreFactory)

	configService.SetClientFactory(options.ClientFactory)

	userService, err := userservice.NewUserService(
		options.ClientFactory,
		options.Authorizer,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"User service start failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	if err != nil {
		logger.Error(
			"Config service start failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	firehoseService, err := firehoseservice.NewFirehoseService(
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Firehose service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	err = os.MkdirAll(openorchFolder, 0755)
	if err != nil {
		logger.Error(
			"Config folder creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	downloadFolder := path.Join(openorchFolder, "downloads")
	err = os.MkdirAll(downloadFolder, 0755)
	if err != nil {
		logger.Error(
			"Downloads folder creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	downloadService, err := downloadservice.NewDownloadService(
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Download service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	downloadService.SetDefaultFolder(downloadFolder)
	downloadService.SetStateFilePath(
		path.Join(openorchFolder, "downloads.json"),
	)

	dockerService, err := dockerservice.NewDockerService(
		options.NodeOptions.VolumeName,
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Docker service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	modelService, err := modelservice.NewModelService(
		options.NodeOptions.GpuPlatform,
		options.NodeOptions.LLMHost,
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Model service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	chatService, err := chatservice.NewChatService(
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Chat service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	promptService, err := promptservice.NewPromptService(
		options.ClientFactory,
		options.LLMClient,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Prompt service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	dynamicService, err := dynamicservice.NewDynamicService(
		options.ClientFactory,
		options.Lock,
		options.Authorizer,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Generic service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	policyService, err := policyservice.NewPolicyService(
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Policy service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	registryService, err := registryservice.NewRegistryService(
		options.NodeOptions.Address,
		options.NodeOptions.Az,
		options.NodeOptions.Region,
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Node service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	deployService, err := deployservice.NewDeployService(
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
		options.Test,
	)
	if err != nil {
		logger.Error(
			"Node service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	sourceService, err := sourceservice.NewSourceService(
		options.ClientFactory,
		options.Lock,
		options.DatastoreFactory,
	)

	secretService, err := secretservice.NewSecretService(
		options.ClientFactory,
		options.Authorizer,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Secret service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	proxyService, err := proxyservice.NewProxyService(
		options.ClientFactory,
		options.Authorizer,
		options.Lock,
		options.DatastoreFactory,
	)
	if err != nil {
		logger.Error(
			"Proxy service creation failed",
			slog.String("error", err.Error()),
		)
		os.Exit(1)
	}

	mws := []middlewares.Middleware{
		middlewares.ThrottledLogger,
		middlewares.Recover,
		middlewares.CORS,
		middlewares.GzipDecodeMiddleware,
	}
	appl := applicator(mws)

	router := mux.NewRouter().SkipClean(true).UseEncodedPath()

	router.NotFoundHandler = http.HandlerFunc(
		func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusNotFound)
			w.Write([]byte("404 page not found"))
		},
	)

	router.HandleFunc("/firehose-svc/events/subscribe", appl(func(w http.ResponseWriter, r *http.Request) {
		firehoseService.Subscribe(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/firehose-svc/event", appl(func(w http.ResponseWriter, r *http.Request) {
		firehoseService.Publish(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/download-svc/download", appl(func(w http.ResponseWriter, r *http.Request) {
		downloadService.Do(w, r)
	})).
		Methods("OPTIONS", "PUT")

	router.HandleFunc("/download-svc/download/{downloadId}/pause", appl(func(w http.ResponseWriter, r *http.Request) {
		downloadService.Pause(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/download-svc/download/{downloadId}", appl(func(w http.ResponseWriter, r *http.Request) {
		downloadService.Get(w, r)
	})).
		Methods("OPTIONS", "GET")

	router.HandleFunc("/download-svc/downloads", appl(func(w http.ResponseWriter, r *http.Request) {
		downloadService.List(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/docker-svc/info", appl(func(w http.ResponseWriter, r *http.Request) {
		dockerService.Info(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/docker-svc/host", appl(func(w http.ResponseWriter, r *http.Request) {
		dockerService.Host(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/docker-svc/container", appl(func(w http.ResponseWriter, r *http.Request) {
		dockerService.RunContainer(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/docker-svc/image", appl(func(w http.ResponseWriter, r *http.Request) {
		dockerService.BuildImage(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/docker-svc/container/stop", appl(func(w http.ResponseWriter, r *http.Request) {
		dockerService.StopContainer(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/docker-svc/container/is-running", appl(func(w http.ResponseWriter, r *http.Request) {
		dockerService.ContainerIsRunning(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/docker-svc/container/summary", appl(func(w http.ResponseWriter, r *http.Request) {
		dockerService.Summary(w, r)
	})).
		Methods("OPTIONS", "GET")

	router.HandleFunc("/model-svc/default-model/status", appl(func(w http.ResponseWriter, r *http.Request) {
		modelService.DefaultStatus(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/model-svc/model/{modelId}/status", appl(func(w http.ResponseWriter, r *http.Request) {
		modelService.Status(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/model-svc/models", appl(func(w http.ResponseWriter, r *http.Request) {
		modelService.List(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/model-svc/model/{modelId}", appl(func(w http.ResponseWriter, r *http.Request) {
		modelService.Get(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/model-svc/default-model/start", appl(func(w http.ResponseWriter, r *http.Request) {
		modelService.StartDefault(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/model-svc/model/{modelId}/start", appl(func(w http.ResponseWriter, r *http.Request) {
		modelService.StartSpecific(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/model-svc/model/{modelId}/make-default", appl(func(w http.ResponseWriter, r *http.Request) {
		modelService.MakeDefault(w, r)
	})).
		Methods("OPTIONS", "PUT")

	router.HandleFunc("/config-svc/config", appl(func(w http.ResponseWriter, r *http.Request) {
		configService.Get(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/config-svc/config", appl(func(w http.ResponseWriter, r *http.Request) {
		configService.Save(w, r)
	})).
		Methods("OPTIONS", "PUT")

	router.HandleFunc("/chat-svc/thread/{threadId}/message", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.AddMessage(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/chat-svc/message/{messageId}", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.DeleteMessage(w, r)
	})).
		Methods("OPTIONS", "DELETE")

	router.HandleFunc("/chat-svc/thread/{threadId}/messages", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.GetMessages(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/chat-svc/thread", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.AddThread(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/chat-svc/thread/{threadId}", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.DeleteThread(w, r)
	})).
		Methods("OPTIONS", "DELETE")

	router.HandleFunc("/chat-svc/threads", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.GetThreads(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/chat-svc/thread/{threadId}", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.GetThread(w, r)
	})).
		Methods("OPTIONS", "GET")

	router.HandleFunc("/chat-svc/thread/{threadId}", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.UpdateThread(w, r)
	})).
		Methods("OPTIONS", "PUT")

	router.HandleFunc("/chat-svc/evens", appl(func(w http.ResponseWriter, r *http.Request) {
		chatService.Events(w, r)
	})).
		Methods("OPTIONS", "GET")

	router.HandleFunc("/prompt-svc/prompt", appl(func(w http.ResponseWriter, r *http.Request) {
		promptService.AddPrompt(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/prompt-svc/prompt/{promptId}", appl(func(w http.ResponseWriter, r *http.Request) {
		promptService.RemovePrompt(w, r)
	})).
		Methods("OPTIONS", "DELETE")

	router.HandleFunc("/prompt-svc/prompts/{threadId}/responses/subscribe", appl(func(w http.ResponseWriter, r *http.Request) {
		promptService.SubscribeToPromptResponses(w, r)
	})).
		Methods("OPTIONS", "GET")

	router.HandleFunc("/prompt-svc/prompts", appl(func(w http.ResponseWriter, r *http.Request) {
		promptService.ListPrompts(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/user-svc/login", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.Login(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/user/by-token", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.ReadUserByToken(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/users", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.GetUsers(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/user/{userId}", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.SaveProfile(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/user-svc/self", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.SaveProfile(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/user-svc/change-password", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.ChangePassword(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/change-password-admin", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.ChangePasswordAdmin(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/organization", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.CreateOrganization(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/organization/{organizationId}/user", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.AddUserToOrganization(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/organization/{organizationId}/user/{userId}", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.RemoveUserFromOrganization(w, r)
	})).
		Methods("OPTIONS", "DELETE")
	router.HandleFunc("/user-svc/user", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.CreateUser(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/user/{userId}", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.DeleteUser(w, r)
	})).
		Methods("OPTIONS", "DELETE")
	router.HandleFunc("/user-svc/roles", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.GetRoles(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/user-svc/role/{roleId}", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.DeleteRole(w, r)
	})).
		Methods("OPTIONS", "DELETE")
	router.HandleFunc("/user-svc/role", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.CreateRole(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/permission/{permissionId}/is-authorized", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.IsAuthorized(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/role/{roleId}/permissions", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.GetPermissions(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/user-svc/role/{roleId}/permissions", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.SetRolePermissions(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/user-svc/permission/{permissionId}", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.UpsertPermission(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/user-svc/register", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.Register(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/user-svc/role/{roleId}/permission/{permissionId}", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.AddPermissionToRole(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/user-svc/public-key", appl(func(w http.ResponseWriter, r *http.Request) {
		userService.GetPublicKey(w, r)
	})).
		Methods("OPTIONS", "GET")

	router.HandleFunc("/dynamic-svc/object", appl(func(w http.ResponseWriter, r *http.Request) {
		dynamicService.Create(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/dynamic-svc/objects/update", appl(func(w http.ResponseWriter, r *http.Request) {
		dynamicService.Update(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/dynamic-svc/objects/delete", appl(func(w http.ResponseWriter, r *http.Request) {
		dynamicService.Delete(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/dynamic-svc/objects", appl(func(w http.ResponseWriter, r *http.Request) {
		dynamicService.Query(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/dynamic-svc/object/{objectId}", appl(func(w http.ResponseWriter, r *http.Request) {
		dynamicService.Upsert(w, r)
	})).
		Methods("OPTIONS", "PUT")

	router.HandleFunc("/registry-svc/nodes", appl(func(w http.ResponseWriter, r *http.Request) {
		registryService.List(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/policy-svc/check", appl(func(w http.ResponseWriter, r *http.Request) {
		policyService.Check(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/policy-svc/instance/{instanceId}", appl(func(w http.ResponseWriter, r *http.Request) {
		policyService.UpsertInstance(w, r)
	})).
		Methods("OPTIONS", "PUT")

	router.HandleFunc("/registry-svc/instances", appl(func(w http.ResponseWriter, r *http.Request) {
		registryService.ListInstances(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/registry-svc/definitions", appl(func(w http.ResponseWriter, r *http.Request) {
		registryService.ListDefinitions(w, r)
	})).
		Methods("OPTIONS", "GET")
	router.HandleFunc("/registry-svc/instance", appl(func(w http.ResponseWriter, r *http.Request) {
		registryService.RegisterInstance(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/registry-svc/definition", appl(func(w http.ResponseWriter, r *http.Request) {
		registryService.SaveDefinition(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/registry-svc/instance/{id}", appl(func(w http.ResponseWriter, r *http.Request) {
		registryService.RemoveInstance(w, r)
	})).
		Methods("OPTIONS", "DELETE")
	router.HandleFunc("/registry-svc/definition/{id}", appl(func(w http.ResponseWriter, r *http.Request) {
		registryService.DeleteDefinition(w, r)
	})).
		Methods("OPTIONS", "DELETE")
	router.HandleFunc("/registry-svc/node/{url}", appl(func(w http.ResponseWriter, r *http.Request) {
		registryService.DeleteNode(w, r)
	})).
		Methods("OPTIONS", "DELETE")

	router.HandleFunc("/deploy-svc/deployment", appl(func(w http.ResponseWriter, r *http.Request) {
		deployService.SaveDeployment(w, r)
	})).
		Methods("OPTIONS", "PUT")
	router.HandleFunc("/deploy-svc/deployments", appl(func(w http.ResponseWriter, r *http.Request) {
		deployService.ListDeployments(w, r)
	})).
		Methods("OPTIONS", "POST")
	router.HandleFunc("/deploy-svc/deployment", appl(func(w http.ResponseWriter, r *http.Request) {
		deployService.DeleteDeployment(w, r)
	})).
		Methods("OPTIONS", "DELETE")

	router.HandleFunc("/source-svc/repo/checkout", appl(func(w http.ResponseWriter, r *http.Request) {
		sourceService.CheckoutRepo(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/secret-svc/secret", appl(func(w http.ResponseWriter, r *http.Request) {
		secretService.Read(w, r)
	})).
		Methods("OPTIONS", "POST")

	router.HandleFunc("/secret-svc/secret", appl(func(w http.ResponseWriter, r *http.Request) {
		secretService.Write(w, r)
	})).
		Methods("OPTIONS", "PUT")

	router.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		proxyService.Route(w, r)
	})

	return router, func() error {
		err = configService.Start()
		if err != nil {
			return errors.Wrap(err, "config service start failed")
		}
		err = downloadService.Start()
		if err != nil {
			return errors.Wrap(err, "download service start failed")
		}
		err = firehoseService.Start()
		if err != nil {
			return errors.Wrap(err, "firehose service start failed")
		}
		err = dockerService.Start()
		if err != nil {
			return errors.Wrap(err, "docker service start failed")
		}
		err = modelService.Start()
		if err != nil {
			return errors.Wrap(err, "model service start failed")
		}
		err = chatService.Start()
		if err != nil {
			return errors.Wrap(err, "chat service start failed")
		}
		err = promptService.Start()
		if err != nil {
			return errors.Wrap(err, "prompt service start failed")
		}
		err = dynamicService.Start()
		if err != nil {
			return errors.Wrap(err, "dynamic service start failed")
		}
		err = policyService.Start()
		if err != nil {
			return errors.Wrap(err, "policy service start failed")
		}
		err = registryService.Start()
		if err != nil {
			return errors.Wrap(err, "registry service start failed")
		}
		err = deployService.Start()
		if err != nil {
			return errors.Wrap(err, "deploy service start failed")
		}
		err = sourceService.Start()
		if err != nil {
			return errors.Wrap(err, "source service start failed")
		}
		err = secretService.Start()
		if err != nil {
			return errors.Wrap(err, "secret service start failed")
		}
		err = proxyService.Start()
		if err != nil {
			return errors.Wrap(err, "proxy service start failed")
		}

		return nil
	}, nil
}

func applicator(
	mws []middlewares.Middleware,
) func(http.HandlerFunc) http.HandlerFunc {
	return func(h http.HandlerFunc) http.HandlerFunc {
		for _, middleware := range mws {
			h = middleware(h)
		}

		return h
	}
}

type HandlerSwitcher struct {
	mu      sync.RWMutex
	handler http.Handler
}

func (hs *HandlerSwitcher) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	hs.mu.RLock()
	defer hs.mu.RUnlock()
	if hs.handler != nil {
		hs.handler.ServeHTTP(w, r)
	} else {
		http.NotFound(w, r)
	}
}

func (hs *HandlerSwitcher) UpdateHandler(handler http.Handler) {
	hs.mu.Lock()
	defer hs.mu.Unlock()
	hs.handler = handler
}
