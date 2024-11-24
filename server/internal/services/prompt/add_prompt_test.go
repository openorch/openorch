/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package promptservice_test

import (
	"context"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/gorilla/mux"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/clients/llm"
	"github.com/singulatron/superplatform/sdk/go/test"
	"github.com/singulatron/superplatform/server/internal/di"
	modeltypes "github.com/singulatron/superplatform/server/internal/services/model/types"
	"go.uber.org/mock/gomock"
)

func TestPromptService(t *testing.T) {
	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, "DeployService Suite")
}

var _ = ginkgo.Describe("Deploy Loop", func() {
	var (
		server     *httptest.Server
		ctrl       *gomock.Controller
		ctx        context.Context
		lc         *llm.MockClientI
		userClient *openapi.APIClient

		mockClientFactory *sdk.MockClientFactory
		mockUserSvc       *openapi.MockUserSvcAPI
		mockChatSvc       *openapi.MockChatSvcAPI
		mockModelSvc      *openapi.MockModelSvcAPI
		mockConfigSvc     *openapi.MockConfigSvcAPI
		mockFirehoseSvc   *openapi.MockFirehoseSvcAPI

		universe    *mux.Router
		starterFunc func() error

		responses []*llm.CompletionResponse
	)

	ginkgo.BeforeEach(func() {
		ctx = context.Background()
		ctrl = gomock.NewController(ginkgo.GinkgoT())
		hs := &di.HandlerSwitcher{}
		server = httptest.NewServer(hs)

		lc = llm.NewMockClientI(ctrl)

		mockClientFactory = sdk.NewMockClientFactory(ctrl)
		mockUserSvc = test.MockUserSvc(ctx, ctrl)
		mockChatSvc = openapi.NewMockChatSvcAPI(ctrl)
		mockModelSvc = openapi.NewMockModelSvcAPI(ctrl)
		mockConfigSvc = openapi.NewMockConfigSvcAPI(ctrl)
		mockFirehoseSvc = openapi.NewMockFirehoseSvcAPI(ctrl)

		mockClientFactory.EXPECT().
			Client(gomock.Any()).
			Return(&openapi.APIClient{
				UserSvcAPI:     mockUserSvc,
				ChatSvcAPI:     mockChatSvc,
				ConfigSvcAPI:   mockConfigSvc,
				ModelSvcAPI:    mockModelSvc,
				FirehoseSvcAPI: mockFirehoseSvc,
				PromptSvcAPI: sdk.NewApiClientFactory(server.URL).
					Client().
					PromptSvcAPI,
			}).
			AnyTimes()

		options := &di.Options{
			Test:          true,
			Url:           server.URL,
			LLMClient:     lc,
			ClientFactory: mockClientFactory,
		}

		var err error
		universe, starterFunc, err = di.BigBang(options)
		gomega.Expect(err).NotTo(gomega.HaveOccurred())

		hs.UpdateHandler(universe)

		gomega.Expect(err).NotTo(gomega.HaveOccurred())
	})

	ginkgo.JustBeforeEach(func() {
		mockConfigSvc.EXPECT().
			GetConfig(gomock.Any()).
			Return(openapi.ApiGetConfigRequest{
				ApiService: mockConfigSvc,
			}).AnyTimes()
		mockConfigSvc.EXPECT().
			GetConfigExecute(gomock.Any()).
			Return(&openapi.ConfigSvcGetConfigResponse{
				Config: &openapi.ConfigSvcConfig{
					Model: &openapi.ConfigSvcModelServiceConfig{
						CurrentModelId: openapi.PtrString("mistral-1"),
					},
				},
			}, nil, nil).AnyTimes()

		mockModelSvc.EXPECT().
			GetModel(gomock.Any(), gomock.Any()).
			Return(openapi.ApiGetModelRequest{
				ApiService: mockModelSvc,
			}).AnyTimes()
		mockModelSvc.EXPECT().
			GetModelExecute(gomock.Any()).
			Return(&openapi.ModelSvcGetModelResponse{
				Exists: true,
				Model: openapi.ModelSvcModel{
					Id: openapi.PtrString("mistral-1"),
				},
				Platform: openapi.ModelSvcPlatform{
					Id: openapi.PtrString(modeltypes.PlatformLlamaCpp.Id),
				},
			}, nil, nil).AnyTimes()

		mockModelSvc.EXPECT().
			GetModelStatus(gomock.Any(), gomock.Any()).
			Return(openapi.ApiGetModelStatusRequest{
				ApiService: mockModelSvc,
			}).AnyTimes()
		mockModelSvc.EXPECT().
			GetModelStatusExecute(gomock.Any()).
			Return(&openapi.ModelSvcStatusResponse{
				Status: &openapi.ModelSvcModelStatus{
					AssetsReady: true,
					Running:     true,
					Address:     "localhost:8001",
				},
			}, nil, nil).AnyTimes()

		mockChatSvc.EXPECT().
			GetThread(gomock.Any(), gomock.Any()).
			Return(openapi.ApiGetThreadRequest{
				ApiService: mockChatSvc,
			})
		mockChatSvc.EXPECT().
			GetThreadExecute(gomock.Any()).
			Return(&openapi.ChatSvcGetThreadResponse{
				Exists: openapi.PtrBool(true),
				Thread: &openapi.ChatSvcThread{
					Id: openapi.PtrString("thread-1"),
				},
			}, nil, nil)
		mockChatSvc.EXPECT().
			AddMessage(gomock.Any(), gomock.Any()).
			Return(openapi.ApiAddMessageRequest{
				ApiService: mockChatSvc,
			}).AnyTimes()
		mockChatSvc.EXPECT().
			AddMessageExecute(gomock.Any()).
			Return(nil, nil, nil).AnyTimes()

		mockModelSvc.EXPECT().
			ListModels(gomock.Any()).
			Return(openapi.ApiListModelsRequest{
				ApiService: mockModelSvc,
			})
		mockModelSvc.EXPECT().
			ListModelsExecute(gomock.Any()).
			Return(&openapi.ModelSvcListResponse{
				Models: []openapi.ModelSvcModel{
					{
						Id: openapi.PtrString("mistral-1"),
					},
				},
			}, nil, nil)
		mockFirehoseSvc.EXPECT().
			PublishEvent(gomock.Any()).
			Return(openapi.ApiPublishEventRequest{
				ApiService: mockFirehoseSvc,
			}).AnyTimes()
		mockFirehoseSvc.EXPECT().
			PublishEventExecute(gomock.Any()).
			Return(nil, nil).AnyTimes()

		lc.EXPECT().
			PostCompletionsStreamed(gomock.Any(), gomock.Any()).
			DoAndReturn(func(req llm.PostCompletionsRequest, callback llm.StreamCallback) error {
				go func() {

					for i := range responses {
						// without this sleep the test hangs forever
						time.Sleep(1 * time.Millisecond)
						callback(responses[i])
					}

				}()
				return nil
			})

		err := starterFunc()
		gomega.Expect(err).NotTo(gomega.HaveOccurred())
	})

	ginkgo.AfterEach(func() {
		server.Close()
		ctrl.Finish()
	})

	ginkgo.Context("prompting works", func() {
		ginkgo.BeforeEach(func() {
			userClient = mockClientFactory.Client()

			responses = []*llm.CompletionResponse{
				{
					Choices: []struct {
						Text         string      `json:"text,omitempty"`
						Index        int         `json:"index,omitempty"`
						Logprobs     interface{} `json:"logprobs,omitempty"`
						FinishReason string      `json:"finish_reason,omitempty"`
					}{
						{Text: "Hi, I'm fine", FinishReason: ""},
					},
				},
				{
					Choices: []struct {
						Text         string      `json:"text,omitempty"`
						Index        int         `json:"index,omitempty"`
						Logprobs     interface{} `json:"logprobs,omitempty"`
						FinishReason string      `json:"finish_reason,omitempty"`
					}{
						{Text: ", how are you", FinishReason: "stop"},
					},
				},
			}
		})

		ginkgo.It("sync promp returns in time", func() {
			crsp, _, err := userClient.ConfigSvcAPI.GetConfig(context.Background()).
				Execute()
			gomega.Expect(err).NotTo(gomega.HaveOccurred())

			mrsp, _, err := userClient.ModelSvcAPI.ListModels(context.Background()).
				Execute()
			gomega.Expect(err).NotTo(gomega.HaveOccurred())

			var model *openapi.ModelSvcModel
			for _, v := range mrsp.Models {
				if !strings.Contains(*v.Id, "mistral") {
					continue
				}
				if *v.Id == *crsp.Config.Model.CurrentModelId {
					model = &v
				}
			}

			gomega.Expect(model).NotTo(gomega.BeNil())
			gomega.Expect(model.Id).NotTo(gomega.BeNil())

			timeout := 5 * time.Second
			tick := 500 * time.Millisecond

			ctx, cancel := context.WithTimeout(context.Background(), timeout)
			defer cancel()

			ticker := time.NewTicker(tick)
			defer ticker.Stop()

			var prsp *openapi.PromptSvcAddPromptResponse

		outer:
			for {
				select {
				case <-ctx.Done():
					gomega.Expect(ctx.Err()).NotTo(gomega.HaveOccurred())
					return
				case <-ticker.C:

					prsp, _, err = userClient.PromptSvcAPI.AddPrompt(ctx).
						Request(
							openapi.PromptSvcAddPromptRequest{
								Prompt: "Hi there, how are you?",
								Sync:   openapi.PtrBool(true),
							},
						).
						Execute()
					gomega.Expect(err).NotTo(gomega.HaveOccurred())
					break outer
				}
			}

			gomega.Expect(prsp).NotTo(gomega.BeNil())
			gomega.Expect(prsp.Answer).NotTo(gomega.BeNil())
			gomega.Expect(*prsp.Answer).To(gomega.ContainSubstring("how"))
		})
	})
})
