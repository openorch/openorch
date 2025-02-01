/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package promptservice

import (
	"context"
	"log/slog"
	"strings"
	"sync"
	"time"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/clients/llm"
	"github.com/openorch/openorch/sdk/go/logger"

	prompttypes "github.com/openorch/openorch/server/internal/services/prompt/types"
)

func (p *PromptService) processLlamaCpp(
	address string,
	currentPrompt *prompttypes.Prompt,
) error {
	fullPrompt := currentPrompt.Prompt

	template := currentPrompt.Parameters.TextToText.Template
	if template == "" {
		template = currentPrompt.EngineParameters.LlamaCpp.Template
	}

	if template != "" {
		fullPrompt = strings.Replace(
			template,
			"{prompt}",
			currentPrompt.Prompt,
			-1,
		)
	}

	var llmClient llm.ClientI
	if p.llmCLient != nil {
		llmClient = p.llmCLient
	} else {
		llmClient = &llm.Client{
			LLMAddress: address,
		}
	}

	start := time.Now()
	var responseCount int
	var mu sync.Mutex

	ticker := time.NewTicker(1 * time.Second)
	defer ticker.Stop()
	done := make(chan bool)

	go func() {
		for {
			select {
			case <-ticker.C:
				mu.Lock()
				logger.Debug(
					"LLM is streaming",
					slog.String("promptId", currentPrompt.Id),
					slog.Float64(
						"responsesPerSecond",
						float64(responseCount/int(time.Since(start).Seconds())),
					),
					slog.Int("totalResponses", responseCount),
				)
				mu.Unlock()
			case <-done:
				return
			}
		}
	}()

	err := llmClient.PostCompletionsStreamed(llm.PostCompletionsRequest{
		Prompt:    fullPrompt,
		Stream:    true,
		MaxTokens: 1000000,
	}, func(resp *llm.CompletionResponse) {
		mu.Lock()
		responseCount++
		mu.Unlock()

		p.StreamManager.Broadcast(currentPrompt.ThreadId, resp)

		if len(resp.Choices) > 0 && resp.Choices[0].FinishReason == "stop" {
			defer func() {
				done <- true
			}()

			_, _, err := p.clientFactory.Client(sdk.WithToken(p.token)).
				ChatSvcAPI.AddMessage(context.Background(), currentPrompt.ThreadId).
				Body(
					openapi.ChatSvcAddMessageRequest{
						Message: &openapi.ChatSvcMessage{
							Id:       openapi.PtrString(sdk.Id("msg")),
							ThreadId: openapi.PtrString(currentPrompt.ThreadId),
							Text: openapi.PtrString(
								llmResponseToText(
									p.StreamManager.History[currentPrompt.ThreadId],
								),
							),
						},
					},
				).
				Execute()
			if err != nil {
				logger.Error("Error when saving chat message after broadcast",
					slog.String("error", err.Error()))
				return
			}

			delete(p.StreamManager.History, currentPrompt.ThreadId)

		}
	})

	return err
}
