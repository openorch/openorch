package deployservice_test

import (
	"context"
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
		server            *httptest.Server
		ctrl              *gomock.Controller
		ctx               context.Context
		mockClientFactory *sdk.MockClientFactory
		mockUserSvc       *openapi.MockUserSvcAPI
		universe          *mux.Router
		mockRegistrySvc   *openapi.MockRegistrySvcAPI
		mockDeploySvc     *openapi.MockDeploySvcAPI
		starterFunc       func() error
		adminClient       *openapi.APIClient

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
		mockDeploySvc = openapi.NewMockDeploySvcAPI(ctrl)

		mockClientFactory.EXPECT().Client(gomock.Any()).Return(&openapi.APIClient{
			UserSvcAPI:     mockUserSvc,
			RegistrySvcAPI: mockRegistrySvc,
			DeploySvcAPI:   mockDeploySvc,
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

		// Mock response for ListNodes
		mockListNodesRequest := openapi.ApiListNodesRequest{ApiService: mockRegistrySvc}
		mockRegistrySvc.EXPECT().ListNodes(ctx).Return(mockListNodesRequest).AnyTimes()
		mockRegistrySvc.EXPECT().ListNodesExecute(gomock.Any()).Return(
			&openapi.RegistrySvcListNodesResponse{
				Nodes: nodes,
			}, nil, nil,
		).AnyTimes()

		// Mock response for ListInstances
		mockListInstancesRequest := openapi.ApiListInstancesRequest{ApiService: mockRegistrySvc}
		mockRegistrySvc.EXPECT().ListInstances(ctx).Return(mockListInstancesRequest).AnyTimes()
		mockRegistrySvc.EXPECT().ListInstancesExecute(gomock.Any()).Return(
			&openapi.RegistrySvcListInstancesResponse{
				Instances: instances,
			}, nil, nil,
		).AnyTimes()

		// Mock response for ListDefinitions
		mockListDefinitionsRequest := openapi.ApiListDefinitionsRequest{ApiService: mockRegistrySvc}
		mockRegistrySvc.EXPECT().ListDefinitions(ctx).Return(mockListDefinitionsRequest).AnyTimes()
		mockRegistrySvc.EXPECT().ListDefinitionsExecute(gomock.Any()).Return(
			&openapi.RegistrySvcListDefinitionsResponse{
				Definitions: definitions,
			}, nil, nil,
		).AnyTimes()
	})

	ginkgo.AfterEach(func() {
		server.Close()
		ctrl.Finish()
	})

	ginkgo.Context("when registry has one active node", func() {
		ginkgo.BeforeEach(func() {
			nodes = []openapi.RegistrySvcNode{
				{Url: openapi.PtrString(server.URL)},
			}
		})

		ginkgo.It("saves a deployment successfully", func() {
			err := starterFunc()
			gomega.Expect(err).NotTo(gomega.HaveOccurred())

			_, _, err = adminClient.DeploySvcAPI.SaveDeployment(ctx).Body(openapi.DeploySvcSaveDeploymentRequest{
				Deployment: &openapi.DeploySvcDeployment{
					DefinitionId: "test-a",
				},
			}).Execute()
			gomega.Expect(err).NotTo(gomega.HaveOccurred())

			maxRetries := 5

			var rsp *openapi.DeploySvcListDeploymentsResponse
			for i := 0; i < maxRetries; i++ {
				rsp, _, err = adminClient.DeploySvcAPI.ListDeployments(ctx).Execute()
				gomega.Expect(err).NotTo(gomega.HaveOccurred())

				if *rsp.Deployments[0].Status == openapi.StatusOK {
					break
				}

				if i == maxRetries-1 {
					ginkgo.Fail("Missing OK status for deployment")
				}
				time.Sleep(time.Second)
			}

			gomega.Expect(err).NotTo(gomega.HaveOccurred())
			gomega.Expect(rsp.Deployments).To(gomega.HaveLen(1))
			gomega.Expect(rsp.Deployments[0].DefinitionId).To(gomega.Equal("test-a"))
		})
	})

})
