package di

import (
	"log/slog"
	"os"
	"path"

	"github.com/singulatron/singulatron/localtron/logger"
	appservice "github.com/singulatron/singulatron/localtron/services/app"
	chatservice "github.com/singulatron/singulatron/localtron/services/chat"
	configservice "github.com/singulatron/singulatron/localtron/services/config"
	dockerservice "github.com/singulatron/singulatron/localtron/services/docker"
	downloadservice "github.com/singulatron/singulatron/localtron/services/download"
	firehoseservice "github.com/singulatron/singulatron/localtron/services/firehose"
	firehosetypes "github.com/singulatron/singulatron/localtron/services/firehose/types"
	genericservice "github.com/singulatron/singulatron/localtron/services/generic"
	modelservice "github.com/singulatron/singulatron/localtron/services/model"
	promptservice "github.com/singulatron/singulatron/localtron/services/prompt"
	storefactoryservice "github.com/singulatron/singulatron/localtron/services/store_factory"
	userservice "github.com/singulatron/singulatron/localtron/services/user"
)

const singulatronFolder = ".singulatron"

type Universe struct {
	ConfigService   *configservice.ConfigService
	PromptService   *promptservice.PromptService
	UserService     *userservice.UserService
	FirehoseService *firehoseservice.FirehoseService
	ChatService     *chatservice.ChatService
	GenericService  *genericservice.GenericService
	ModelService    *modelservice.ModelService
	DownloadService *downloadservice.DownloadService
	AppService      *appservice.AppService
	DockerService   *dockerservice.DockerService
}

type UniverseOptions struct {
	Test bool
}

func MakeUniverse(options UniverseOptions) (*Universe, error) {
	var homeDir string
	var err error
	if options.Test {
		homeDir, err = os.MkdirTemp("", "singulatron-")
		if err != nil {
			logger.Error("Homedir creation failed", slog.String("error", err.Error()))
			os.Exit(1)
		}
	} else {
		homeDir, err = os.UserHomeDir()
		if err != nil {
			logger.Error("Homedir creation failed", slog.String("error", err.Error()))
			os.Exit(1)
		}
	}

	configService, err := configservice.NewConfigService()
	if err != nil {
		logger.Error("Config service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}
	configService.EventCallback = func(event firehosetypes.Event) {
		logger.Debug("Received event from config before firehose is set up",
			slog.String("eventName", event.Name()),
		)
	}
	configService.ConfigDirectory = path.Join(homeDir, singulatronFolder)
	if os.Getenv("SINGULATRON_CONFIG_PATH") != "" {
		configService.ConfigDirectory = os.Getenv("SINGULATRON_CONFIG_PATH")
	}

	storefactoryservice.LocalStorePath = path.Join(configService.ConfigDirectory, "data")
	err = os.MkdirAll(storefactoryservice.LocalStorePath, 0755)
	if err != nil {
		logger.Error("Creating data folder failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	userService, err := userservice.NewUserService(
		configService,
	)
	if err != nil {
		logger.Error("User service start failed", slog.String("error", err.Error()))
		os.Exit(1)
	}
	// hacks to avoid import cycles
	configService.UpsertPermission = userService.UpsertPermission
	configService.AddPermissionToRole = userService.AddPermissionToRole

	err = configService.Start()
	if err != nil {
		logger.Error("Config service start failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	firehoseService, err := firehoseservice.NewFirehoseService(userService)
	if err != nil {
		logger.Error("Firehose service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}
	configService.EventCallback = firehoseService.Publish

	singulatronFolder := path.Join(homeDir, singulatronFolder)
	err = os.MkdirAll(singulatronFolder, 0755)
	if err != nil {
		logger.Error("Config folder creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	downloadFolder := path.Join(singulatronFolder, "downloads")
	err = os.MkdirAll(downloadFolder, 0755)
	if err != nil {
		logger.Error("Downloads folder creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	downloadService, err := downloadservice.NewDownloadService(firehoseService, userService)
	if err != nil {
		logger.Error("Download service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	downloadService.DefaultFolder = downloadFolder
	downloadService.StateFilePath = path.Join(singulatronFolder, "downloads.json")
	err = downloadService.Start()
	if err != nil {
		logger.Error("Download service start failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	dockerService, err := dockerservice.NewDockerService(downloadService, userService, configService)
	if err != nil {
		logger.Error("Docker service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	modelService, err := modelservice.NewModelService(downloadService, userService, configService, dockerService)
	if err != nil {
		logger.Error("Model service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	appService, err := appservice.NewAppService(
		configService,
		firehoseService,
		userService,
	)
	if err != nil {
		logger.Error("App service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	chatService, err := chatservice.NewChatService(
		configService,
		firehoseService,
		userService,
	)
	if err != nil {
		logger.Error("Chat service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	promptService, err := promptservice.NewPromptService(
		configService,
		userService,
		modelService,
		chatService,
		firehoseService,
	)
	if err != nil {
		logger.Error("Prompt service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	genericService, err := genericservice.NewGenericService(
		configService,
		firehoseService,
		userService,
	)
	if err != nil {
		logger.Error("Generic service creation failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	return &Universe{
		ConfigService:   configService,
		PromptService:   promptService,
		UserService:     userService,
		FirehoseService: firehoseService,
		ChatService:     chatService,
		GenericService:  genericService,
		DownloadService: downloadService,
		AppService:      appService,
		DockerService:   dockerService,
		ModelService:    modelService,
	}, nil
}
