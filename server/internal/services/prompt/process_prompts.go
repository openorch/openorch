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
	"encoding/json"
	"fmt"
	"log/slog"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/flusflas/dipper"
	"github.com/pkg/errors"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/clients/llm"
	"github.com/openorch/openorch/sdk/go/clients/stable_diffusion"
	"github.com/openorch/openorch/sdk/go/datastore"
	"github.com/openorch/openorch/sdk/go/logger"

	modelservice "github.com/openorch/openorch/server/internal/services/model"
	modeltypes "github.com/openorch/openorch/server/internal/services/model/types"
	prompttypes "github.com/openorch/openorch/server/internal/services/prompt/types"
)

var TimeNow = time.Now

const (
	maxRetries    = 5
	BaseDelay     = 1 * time.Second
	promptTimeout = 1 * time.Minute
)

// a blocking method, call it in a goroutine
func (p *PromptService) processPrompts() {
	ticker := time.NewTicker(2000 * time.Millisecond)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
		case <-p.trigger:
		}

		err := p.processNextPrompt()
		if err != nil {
			logger.Error("Error processing prompt",
				slog.String("error", err.Error()),
			)
		}
	}
}

func (p *PromptService) processNextPrompt() error {
	p.runMutex.Lock()
	defer p.runMutex.Unlock()

	runningPrompts, err := p.promptsStore.Query(
		datastore.Equals(
			datastore.Field("status"),
			prompttypes.PromptStatusRunning,
		),
	).Find()
	if err != nil {
		return err
	}

	hasRunning := false
	runningPromptId := ""
	for _, runningPromptI := range runningPrompts {
		runningPrompt := runningPromptI.(*prompttypes.Prompt)

		if runningPrompt.LastRun.Before(time.Now().Add(-promptTimeout)) {
			logger.Info("Setting prompt as timed out",
				slog.String("promptId", runningPrompt.Id),
			)

			runningPrompt.Status = prompttypes.PromptStatusErrored
			runningPrompt.Error = "timed out"
			err = p.promptsStore.Query(
				datastore.Id(runningPrompt.Id),
			).Update(runningPrompt)
			if err != nil {
				return err
			}
			continue
		}
		hasRunning = true
		runningPromptId = runningPrompt.Id
	}

	if hasRunning {
		logger.Debug("Prompt is already running",
			slog.String("promptId", runningPromptId),
		)
		return nil
	}

	currentPrompt, err := SelectPrompt(p.promptsStore)
	if err != nil {
		return err
	}
	if currentPrompt == nil {
		return nil
	}

	return p.processPrompt(currentPrompt)
}

func (p *PromptService) processPrompt(
	currentPrompt *prompttypes.Prompt,
) (err error) {
	updateCurr := func() {
		logger.Info("Prompt finished",
			slog.String("promptId", currentPrompt.Id),
			slog.String("status", string(currentPrompt.Status)),
			slog.Any("error", err),
		)

		err = p.promptsStore.Query(
			datastore.Id(currentPrompt.Id),
		).Update(currentPrompt)
		if err != nil {
			logger.Error("Error updating prompt",
				slog.String("promptId", currentPrompt.Id),
				slog.String("error", err.Error()),
			)
		}

		err = p.promptsStore.Query(
			datastore.Id(currentPrompt.Id),
		).Update(currentPrompt)
		if err != nil {
			logger.Error("Error updating prompt",
				slog.String("promptId", currentPrompt.Id),
				slog.String("error", err.Error()),
			)
		}
	}

	defer func() {
		if err != nil {
			currentPrompt.Error = err.Error()
			currentPrompt.Status = prompttypes.PromptStatusErrored
			updateCurr()
		} else {
			currentPrompt.Status = prompttypes.PromptStatusCompleted
			updateCurr()
		}

		ev := prompttypes.EventPromptProcessingFinished{
			PromptId: currentPrompt.Id,
			Error:    errToString(err),
		}

		var m map[string]interface{}
		js, _ := json.Marshal(ev)
		json.Unmarshal(js, &m)

		_, err = p.clientFactory.Client(sdk.WithToken(p.token)).
			FirehoseSvcAPI.PublishEvent(context.Background()).
			Event(openapi.FirehoseSvcEventPublishRequest{
				Event: &openapi.FirehoseSvcEvent{
					Name: openapi.PtrString(ev.Name()),
					Data: m,
				},
			}).
			Execute()
		if err != nil {
			logger.Error(
				"Failed to publish firehose event",
				slog.Any("error", err),
			)
		}
	}()

	logger.Info("Picking up prompt from queue",
		slog.String("promptId", currentPrompt.Id),
	)

	currentPrompt.LastRun = time.Now()
	currentPrompt.Error = ""
	currentPrompt.Status = prompttypes.PromptStatusRunning
	currentPrompt.RunCount++

	err = p.promptsStore.Upsert(currentPrompt)
	if err != nil {
		return errors.Wrap(err, "error updating currently running prompt")
	}

	ev := prompttypes.EventPromptProcessingStarted{
		PromptId: currentPrompt.Id,
	}

	var m map[string]interface{}
	js, _ := json.Marshal(ev)
	json.Unmarshal(js, &m)

	_, err = p.clientFactory.Client(sdk.WithToken(p.token)).
		FirehoseSvcAPI.PublishEvent(context.Background()).
		Event(openapi.FirehoseSvcEventPublishRequest{
			Event: &openapi.FirehoseSvcEvent{
				Name: openapi.PtrString(ev.Name()),
				Data: m,
			},
		}).
		Execute()
	if err != nil {
		logger.Error("Failed to publish firehose event", slog.Any("error", err))
	}

	_, _, err = p.clientFactory.Client(sdk.WithToken(p.token)).
		ChatSvcAPI.AddMessage(context.Background(), currentPrompt.ThreadId).
		Body(openapi.ChatSvcAddMessageRequest{
			Message: &openapi.ChatSvcMessage{
				// not a fan of taking the prompt id but at least it makes this idempotent
				// in case prompts get retried over and over again
				Id:       openapi.PtrString(currentPrompt.Id),
				ThreadId: openapi.PtrString(currentPrompt.ThreadId),
				UserId:   openapi.PtrString(currentPrompt.UserId),
				Content:  openapi.PtrString(currentPrompt.Prompt),
				CreatedAt: openapi.PtrString(
					time.Now().Format(time.RFC3339Nano),
				),
			},
		}).
		Execute()
	if err != nil {
		return err
	}

	modelId := currentPrompt.ModelId
	if modelId == "" {
		getConfigRsp, _, err := p.clientFactory.Client(sdk.WithToken(p.token)).
			ConfigSvcAPI.GetConfig(context.Background()).
			Execute()
		if err != nil {
			return err
		}

		modelIdI := dipper.Get(getConfigRsp.Config.Data, "model-svc.currentModelId")
		var ok bool
		modelId, ok = modelIdI.(string)
		if !ok {
			modelId = modelservice.DefaultModelId
		}
	}

	statusRsp, _, err := p.clientFactory.Client(sdk.WithToken(p.token)).
		ModelSvcAPI.GetModelStatus(context.Background(), modelId).
		Execute()
	if err != nil {
		return err
	}

	stat := statusRsp.Status
	if !stat.Running {
		return fmt.Errorf("model '%v' is not running", modelId)
	}
	if stat.Address == "" {
		return errors.Wrap(err, "missing model address")
	}
	if !strings.HasPrefix(stat.Address, "http") {
		stat.Address = "http://" + stat.Address
	}

	fullPrompt := currentPrompt.Prompt
	if currentPrompt.Template != "" {
		fullPrompt = strings.Replace(
			currentPrompt.Template,
			"{prompt}",
			currentPrompt.Prompt,
			-1,
		)
	}

	err = p.processPlatform(stat.Address, modelId, fullPrompt, currentPrompt)

	logger.Debug("Finished streaming LLM",
		slog.String("error", fmt.Sprintf("%v", err)),
	)
	if err != nil {
		return errors.Wrap(err, "error streaming llm")
	}

	return nil
}

func (p *PromptService) processPlatform(
	address string,
	modelId string,
	fullPrompt string,
	currentPrompt *prompttypes.Prompt,
) error {
	getModelRsp, _, err := p.clientFactory.Client(sdk.WithToken(p.token)).
		ModelSvcAPI.GetModel(context.Background(), modelId).
		Execute()
	if err != nil {
		return err
	}

	switch *getModelRsp.Platform.Id {
	case modeltypes.PlatformLlamaCpp.Id:
		return p.processLlamaCpp(address, fullPrompt, currentPrompt)
	case modeltypes.PlatformStableDiffusion.Id:
		return p.processStableDiffusion(address, fullPrompt, currentPrompt)
	}

	return fmt.Errorf("cannot find platform %v", getModelRsp.Platform.Id)
}

func (p *PromptService) processStableDiffusion(
	address string,
	fullPrompt string,
	currentPrompt *prompttypes.Prompt,
) error {
	sd := stable_diffusion.Client{
		Address: address,
	}

	req := stable_diffusion.Txt2ImgRequest{
		Prompt:        fullPrompt,
		Steps:         20,
		Width:         100,
		Height:        100,
		GuidanceScale: 7.5,
		HRScale:       2,
		Seed:          0,
		SamplerIndex:  "Euler",
		NumIterations: 1,
		RestoreFaces:  true,
		Tiling:        true,
	}

	rsp, err := sd.Txt2Img(req)
	if err != nil {
		return err
	}
	if len(rsp.Images) == 0 {
		return errors.New("no image in response")
	}

	imgUrl := stable_diffusion.FileURL(address, "s")

	imageBytes, err := stable_diffusion.GetImage(imgUrl)
	if err != nil {
		return err
	}

	// Write imageBytes to a temporary file
	tempFile, err := os.CreateTemp("", "upload-*.png")
	if err != nil {
		return err
	}
	defer tempFile.Close()

	_, err = tempFile.Write(imageBytes)
	if err != nil {
		return err
	}

	// Open the file for uploading
	imageFile, err := os.Open(tempFile.Name())
	if err != nil {
		return err
	}
	defer imageFile.Close()

	uploadRsp, _, err := p.clientFactory.Client(sdk.WithToken(p.token)).
		FileSvcAPI.UploadFile(context.Background()).
		File(imageFile).
		Execute()
	if err != nil {
		return errors.Wrap(err, "error uploading image")
	}

	fileIds := []string{*uploadRsp.Upload.FileId}

	_, _, err = p.clientFactory.Client(sdk.WithToken(p.token)).
		ChatSvcAPI.AddMessage(context.Background(), currentPrompt.ThreadId).
		Body(
			openapi.ChatSvcAddMessageRequest{
				Message: &openapi.ChatSvcMessage{
					Id:       openapi.PtrString(sdk.Id("msg")),
					ThreadId: openapi.PtrString(currentPrompt.ThreadId),
					Content:  openapi.PtrString("Sure, here is your image"),
					FileIds:  fileIds,
				},
			},
		).
		Execute()

	if err != nil {
		logger.Error("Error when saving chat message after image generation",
			slog.String("error", err.Error()))
		return err
	}

	return nil
}

func (p *PromptService) processLlamaCpp(
	address string,
	fullPrompt string,
	currentPrompt *prompttypes.Prompt,
) error {
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
							Content: openapi.PtrString(
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
