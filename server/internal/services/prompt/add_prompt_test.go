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

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/clients/llm"
	"github.com/singulatron/superplatform/sdk/go/test"
	"github.com/singulatron/superplatform/server/internal/di"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"
)

func TestAddPrompt(t *testing.T) {
	ctx := context.Background()
	hs := &di.HandlerSwitcher{}
	server := httptest.NewServer(hs)
	defer server.Close()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	lc := llm.NewMockClientI(ctrl)

	mockClientFactory := sdk.NewMockClientFactory(ctrl)
	mockUserSvc := test.MockUserSvc(ctx, ctrl)
	mockChatSvc := openapi.NewMockChatSvcAPI(ctrl)
	mockModelSvc := openapi.NewMockModelSvcAPI(ctrl)
	mockConfigSvc := openapi.NewMockConfigSvcAPI(ctrl)

	mockClientFactory.EXPECT().
		Client(gomock.Any()).
		Return(&openapi.APIClient{
			UserSvcAPI:   mockUserSvc,
			ChatSvcAPI:   mockChatSvc,
			ConfigSvcAPI: mockConfigSvc,
			ModelSvcAPI:  mockModelSvc,
			PromptSvcAPI: sdk.NewApiClientFactory(server.URL).Client().PromptSvcAPI,
		}).
		AnyTimes()

	options := &di.Options{
		Test:          true,
		Url:           server.URL,
		LLMClient:     lc,
		ClientFactory: mockClientFactory,
	}

	mockConfigSvc.EXPECT().GetConfig(gomock.Any()).Return(openapi.ApiGetConfigRequest{
		ApiService: mockConfigSvc,
	})
	mockConfigSvc.EXPECT().GetConfigExecute(gomock.Any()).Return(&openapi.ConfigSvcGetConfigResponse{
		Config: &openapi.ConfigSvcConfig{
			Model: &openapi.ConfigSvcModelServiceConfig{
				CurrentModelId: openapi.PtrString("mistral-1"),
			},
		},
	}, nil, nil)

	mockModelSvc.EXPECT().ListModels(gomock.Any()).Return(openapi.ApiListModelsRequest{
		ApiService: mockModelSvc,
	})
	mockModelSvc.EXPECT().ListModelsExecute(gomock.Any()).Return(&openapi.ModelSvcListResponse{
		Models: []openapi.ModelSvcModel{
			{
				Id: openapi.PtrString("mistral-1"),
			},
		},
	}, nil, nil)

	universe, starterFunc, err := di.BigBang(options)
	require.NoError(t, err)

	hs.UpdateHandler(universe)

	err = starterFunc()
	require.NoError(t, err)

	userClient := options.ClientFactory.Client()

	responses := []*llm.CompletionResponse{
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

	crsp, _, err := userClient.ConfigSvcAPI.GetConfig(context.Background()).
		Execute()
	require.NoError(t, err)

	mrsp, _, err := userClient.ModelSvcAPI.ListModels(context.Background()).
		Execute()
	require.NoError(t, err)

	var model *openapi.ModelSvcModel
	for _, v := range mrsp.Models {
		if !strings.Contains(*v.Id, "mistral") {
			continue
		}
		if *v.Id == *crsp.Config.Model.CurrentModelId {
			model = &v
		}
	}

	require.NotNil(t, model)
	require.Equal(t, true, model.Id != nil)

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

			require.NoError(t, ctx.Err(), "Operation timed out")
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
			require.NoError(t, err)
			break outer
		}
	}

	require.Equal(t, true, strings.Contains(*prsp.Answer, "how"))
}
