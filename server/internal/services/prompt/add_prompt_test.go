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
	"github.com/singulatron/superplatform/server/internal/di"
	modeltypes "github.com/singulatron/superplatform/server/internal/services/model/types"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"
)

func TestAddPrompt(t *testing.T) {
	hs := &di.HandlerSwitcher{}
	server := httptest.NewServer(hs)
	defer server.Close()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	lc := llm.NewMockClientI(ctrl)

	options := &di.Options{
		Test:      true,
		Url:       server.URL,
		LLMClient: lc,
	}

	universe, starterFunc, err := di.BigBang(options)
	require.NoError(t, err)

	hs.UpdateHandler(universe)

	err = starterFunc()
	require.NoError(t, err)

	token, err := sdk.RegisterUser(
		options.ClientFactory.Client().UserSvcAPI,
		"someuser",
		"pw123",
		"Some name",
	)
	require.NoError(t, err)
	userClient := options.ClientFactory.Client(sdk.WithToken(token))

	// router.AddMock("model-svc", "/models", modeltypes.ListResponse{
	// 	Models: []*modeltypes.Model{{
	// 		Id: "huggingface/TheBloke/mistral-7b-instruct-v0.2.Q3_K_S.gguf",
	// 		Assets: map[string]string{
	// 			"MODEL": "https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q3_K_S.gguf",
	// 		},
	// 		PlatformId:     "llama-cpp",
	// 		Name:           "Mistral",
	// 		Parameters:     "7B",
	// 		Flavour:        "Instruct",
	// 		Version:        "v0.2",
	// 		Quality:        "Q3_K_S",
	// 		Extension:      "GGUF",
	// 		FullName:       "Mistral 7B Instruct v0.2 Q3_K_S",
	// 		Size:           3.16,
	// 		MaxRam:         5.66,
	// 		QuantComment:   "very small, high quality loss",
	// 		Description:    "hi",
	// 		PromptTemplate: "[INST] {prompt} [/INST]",
	// 	}}})
	// router.AddMock(
	// 	"model-svc",
	// 	fmt.Sprintf(
	// 		"/model/%v/status",
	// 		url.PathEscape(configservice.DefaultModelId),
	// 	),
	// 	&modeltypes.StatusResponse{
	// 		Status: &modeltypes.ModelStatus{
	// 			AssetsReady: true,
	// 			Running:     true,
	// 			Address:     "127.0.0.1:8888",
	// 		}},
	// )

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

	var model *modeltypes.Model
	for _, v := range mrsp.Models {
		if v.Id == crsp.Config.Model.CurrentModelId {
			model = v
		}
	}

	require.Equal(t, true, model.Id != "")

	prsp, _, err := userClient.PromptSvcAPI.AddPrompt(context.Background()).
		Request(
			openapi.PromptSvcAddPromptRequest{
				Prompt: "Hi there, how are you?",
				Sync:   openapi.PtrBool(true),
			},
		).
		Execute()
	require.NoError(t, err)

	require.Equal(t, true, strings.Contains(*prsp.Answer, "how"))
}
