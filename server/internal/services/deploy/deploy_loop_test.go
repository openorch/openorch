package deployservice_test

import (
	"context"
	"fmt"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/gorilla/mux"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/test"
	"github.com/singulatron/superplatform/server/internal/di"
	"go.uber.org/mock/gomock"
)

func TestDeployService(t *testing.T) {
	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, "DeployService Suite")
}

var _ = ginkgo.Describe("Deploy Loop", func() {
	var (
		server               *httptest.Server
		ctrl                 *gomock.Controller
		ctx                  context.Context
		mockClientFactory    *sdk.MockClientFactory
		mockUserSvc          *openapi.MockUserSvcAPI
		universe             *mux.Router
		mockRegistrySvc      *openapi.MockRegistrySvcAPI
		mockDockerSvc        *openapi.MockDockerSvcAPI
		starterFunc          func() error
		adminClient          *openapi.APIClient
		launchContainerError error

		nodes       []openapi.RegistrySvcNode
		instances   []openapi.RegistrySvcInstance
		definitions []openapi.RegistrySvcDefinition
	)

	ginkgo.BeforeEach(func() {
		ctx = context.Background()
		ctrl = gomock.NewController(ginkgo.GinkgoT())
		hs := &di.HandlerSwitcher{}
		server = httptest.NewServer(hs)

		mockClientFactory = sdk.NewMockClientFactory(ctrl)
		mockUserSvc = test.MockUserSvc(ctx, ctrl)
		mockRegistrySvc = openapi.NewMockRegistrySvcAPI(ctrl)
		mockDockerSvc = openapi.NewMockDockerSvcAPI(ctrl)

		mockClientFactory.EXPECT().Client(gomock.Any()).Return(&openapi.APIClient{
			UserSvcAPI:     mockUserSvc,
			RegistrySvcAPI: mockRegistrySvc,
			DockerSvcAPI:   mockDockerSvc,
		}).AnyTimes()

		options := &di.Options{
			Test:          true,
			Url:           server.URL,
			ClientFactory: mockClientFactory,
		}
		var err error
		universe, starterFunc, err = di.BigBang(options)
		gomega.Expect(err).NotTo(gomega.HaveOccurred())

		hs.UpdateHandler(universe)

		adminClient, _, err = test.AdminClient(server.URL)
		gomega.Expect(err).NotTo(gomega.HaveOccurred())

	})

	ginkgo.JustBeforeEach(func() {
		mockListNodesRequest := openapi.ApiListNodesRequest{ApiService: mockRegistrySvc}
		mockRegistrySvc.EXPECT().ListNodes(ctx).Return(mockListNodesRequest).AnyTimes()
		mockRegistrySvc.EXPECT().ListNodesExecute(gomock.Any()).Return(
			&openapi.RegistrySvcListNodesResponse{
				Nodes: nodes,
			}, nil, nil,
		).AnyTimes()

		mockListInstancesRequest := openapi.ApiListInstancesRequest{ApiService: mockRegistrySvc}
		mockRegistrySvc.EXPECT().ListInstances(ctx).Return(mockListInstancesRequest).AnyTimes()
		mockRegistrySvc.EXPECT().ListInstancesExecute(gomock.Any()).Return(
			&openapi.RegistrySvcListInstancesResponse{
				Instances: instances,
			}, nil, nil,
		).AnyTimes()

		mockListDefinitionsRequest := openapi.ApiListDefinitionsRequest{ApiService: mockRegistrySvc}
		mockRegistrySvc.EXPECT().ListDefinitions(ctx).Return(mockListDefinitionsRequest).AnyTimes()
		mockRegistrySvc.EXPECT().ListDefinitionsExecute(gomock.Any()).Return(
			&openapi.RegistrySvcListDefinitionsResponse{
				Definitions: definitions,
			}, nil, nil,
		).AnyTimes()

		mockLaunchContainerRequest := openapi.ApiLaunchContainerRequest{ApiService: mockDockerSvc}
		mockDockerSvc.EXPECT().LaunchContainer(ctx).Return(mockLaunchContainerRequest).AnyTimes()
		mockDockerSvc.EXPECT().LaunchContainerExecute(gomock.Any()).Return(nil, nil, launchContainerError).AnyTimes()

		mockRegisterInstanceRequest := openapi.ApiRegisterInstanceRequest{ApiService: mockRegistrySvc}
		mockRegistrySvc.EXPECT().RegisterInstance(ctx).Return(mockRegisterInstanceRequest).AnyTimes()
		mockRegistrySvc.EXPECT().RegisterInstanceExecute(gomock.Any()).Return(nil, nil, nil).AnyTimes()

		err := starterFunc()
		gomega.Expect(err).NotTo(gomega.HaveOccurred())
	})

	ginkgo.AfterEach(func() {
		server.Close()
		ctrl.Finish()
	})

	ginkgo.Context("when registry has one active node", func() {
		ginkgo.BeforeEach(func() {
			nodes = []openapi.RegistrySvcNode{
				{
					Url: server.URL,
				},
			}
			definitions = []openapi.RegistrySvcDefinition{
				{
					Id: "test-a", Image: openapi.RegistrySvcImageSpec{
						Name: "hashicorp/http-echo",
						Port: 8080,
					},
					HostPort: openapi.PtrInt32(8887),
				},
			}
		})

		ginkgo.It("saves a deployment successfully", func() {
			_, _, err := adminClient.DeploySvcAPI.SaveDeployment(ctx).Body(openapi.DeploySvcSaveDeploymentRequest{
				Deployment: &openapi.DeploySvcDeployment{
					DefinitionId: "test-a",
				},
			}).Execute()
			gomega.Expect(err).NotTo(gomega.HaveOccurred())

			rsp, err := waitForDeploymentStatus(ctx, adminClient, openapi.DeploymentStatusOK, 5)

			gomega.Expect(err).NotTo(gomega.HaveOccurred())
			gomega.Expect(rsp.Deployments).To(gomega.HaveLen(1))
			gomega.Expect(rsp.Deployments[0].DefinitionId).To(gomega.Equal("test-a"))
		})
	})

	ginkgo.When("docker launch container fails", func() {
		ginkgo.BeforeEach(func() {
			launchContainerError = fmt.Errorf("Internal Server Error")
			nodes = []openapi.RegistrySvcNode{
				{
					Url: server.URL,
				},
			}
			definitions = []openapi.RegistrySvcDefinition{
				{
					Id: "test-a", Image: openapi.RegistrySvcImageSpec{
						Name: "hashicorp/http-echo",
						Port: 8080,
					},
					HostPort: openapi.PtrInt32(8887),
				},
			}
		})

		ginkgo.It("status of the deployment is error", func() {
			_, _, err := adminClient.DeploySvcAPI.SaveDeployment(ctx).Body(openapi.DeploySvcSaveDeploymentRequest{
				Deployment: &openapi.DeploySvcDeployment{
					DefinitionId: "test-a",
				},
			}).Execute()
			gomega.Expect(err).NotTo(gomega.HaveOccurred())

			rsp, err := waitForDeploymentStatus(ctx, adminClient, openapi.DeploymentStatusError, 5)

			gomega.Expect(err).NotTo(gomega.HaveOccurred())
			gomega.Expect(rsp.Deployments).To(gomega.HaveLen(1))
			gomega.Expect(rsp.Deployments[0].DefinitionId).To(gomega.Equal("test-a"))
			gomega.Expect(*rsp.Deployments[0].Details).To(gomega.Equal("Internal Server Error"))
		})
	})
})

func waitForDeploymentStatus(ctx context.Context, client *openapi.APIClient, expectedStatus openapi.DeploySvcDeploymentStatus, retries int) (*openapi.DeploySvcListDeploymentsResponse, error) {
	for i := 0; i < retries; i++ {
		rsp, _, err := client.DeploySvcAPI.ListDeployments(ctx).Execute()
		if err != nil {
			return nil, err
		}
		if len(rsp.Deployments) > 0 && *rsp.Deployments[0].Status == expectedStatus {
			return rsp, nil
		}

		time.Sleep(time.Second)
	}

	return nil, fmt.Errorf("expected deployment status %s not reached", expectedStatus)
}