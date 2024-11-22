/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package modelservice

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"log/slog"
	"net"
	"strings"
	"time"

	"github.com/pkg/errors"

	openapi "github.com/singulatron/superplatform/clients/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	"github.com/singulatron/superplatform/sdk/go/logger"

	modeltypes "github.com/singulatron/superplatform/server/internal/services/model/types"
)

const hostPortNum = 8001

/*
Starts the model which has the supplied modelId or the currently activated one of
the modelId is empty.
*/
func (ms *ModelService) start(modelId string) error {
	getConfigResponse, _, err := ms.clientFactory.Client().ConfigSvcAPI.GetConfig(context.Background()).Execute()
	if err != nil {
		return err
	}

	if modelId == "" {
		conf := getConfigResponse.Config
		if conf.Model.CurrentModelId == nil {
			return errors.New("no model id specified and no default model")
		}
		modelId = *conf.Model.CurrentModelId
	}

	modelI, found, err := ms.modelsStore.Query(
		datastore.Id(modelId),
	).FindOne()
	if err != nil {
		return err
	}
	if !found {
		return errors.New("model not found")
	}
	model := modelI.(*modeltypes.Model)

	platformI, found, err := ms.platformsStore.Query(
		datastore.Id(model.PlatformId),
	).FindOne()
	if err != nil {
		return err
	}
	if !found {
		return errors.New("cannot find platform")
	}
	platform := platformI.(*modeltypes.Platform)

	return ms.startWithDocker(model, platform)
}

func (ms *ModelService) startWithDocker(model *modeltypes.Model, platform *modeltypes.Platform) error {
	launchOptions := &openapi.DockerSvcRunContainerOptions{
		Name: openapi.PtrString(platform.Id),
	}

	image := platform.Architectures.Default.Image
	port := platform.Architectures.Default.Port
	launchOptions.Envs = platform.Architectures.Default.Envars
	launchOptions.Keeps = platform.Architectures.Default.Keeps
	launchOptions.Assets = &model.Assets

	switch ms.gpuPlatform {
	case "cuda":
		launchOptions.GpuEnabled = openapi.PtrBool(true)

		if platform.Architectures.Cuda.Image != "" {
			image = platform.Architectures.Cuda.Image
		}
		if platform.Architectures.Cuda.Port != 0 {
			port = platform.Architectures.Cuda.Port
		}
		if len(platform.Architectures.Cuda.Envars) > 0 {
			launchOptions.Envs = platform.Architectures.Cuda.Envars
		}
		if len(platform.Architectures.Cuda.Keeps) > 0 {
			launchOptions.Keeps = platform.Architectures.Cuda.Keeps
		}
	}

	hash, err := modelToHash(model, platform)
	if err != nil {
		return err
	}
	launchOptions.Hash = openapi.PtrString(hash)

	runRsp, _, err := ms.clientFactory.Client().DockerSvcAPI.RunContainer(context.Background()).Request(
		openapi.DockerSvcRunContainerRequest{
			Image:    image,
			Port:     int32(port),
			HostPort: openapi.PtrInt32(int32(hostPortNum)),
			Options:  launchOptions,
		},
	).Execute()
	if err != nil {
		return errors.Wrap(err, "failed to launch container")
	}

	if *runRsp.Info.NewContainerStarted {
		state := ms.get(int(*runRsp.Info.PortNumber))
		if !state.HasCheckerRunning {
			go ms.checkIfAnswers(model, platform, int(*runRsp.Info.PortNumber), state)
		}
	}

	return nil
}

func (ms *ModelService) get(port int) *modeltypes.ModelState {
	ms.modelStateMutex.Lock()
	defer ms.modelStateMutex.Unlock()

	_, ok := ms.modelPortMap[port]
	if !ok {
		ms.modelPortMap[port] = &modeltypes.ModelState{}
	}

	return ms.modelPortMap[port]
}

func modelToHash(model *modeltypes.Model, platform *modeltypes.Platform) (string, error) {
	bs, err := json.Marshal(platform)
	if err != nil {
		return "", err
	}

	bs1, err := json.Marshal(model.Assets)
	if err != nil {
		return "", err
	}

	return generateStringHash(string(bs) + string(bs1)), nil
}

func generateStringHash(vals string) string {
	hasher := sha256.New()
	hasher.Write([]byte(vals))
	return hex.EncodeToString(hasher.Sum(nil))
}

func (ms *ModelService) checkIfAnswers(
	model *modeltypes.Model,
	platform *modeltypes.Platform,
	port int,
	state *modeltypes.ModelState,
) {
	state.SetHasCheckerRunning(true)

	defer func() {
		state.SetHasCheckerRunning(false)
	}()

	hash, err := modelToHash(model, platform)
	if err != nil {
		logger.Error("cannot get hash to print logs", slog.Any("error", err))
		return
	}

	first := true
	for {
		if !first {
			time.Sleep(5 * time.Second)
		}
		first = false

		logger.Debug("Checking for answer started", slog.Int("port", port))

		isRunningRsp, _, err := ms.clientFactory.Client().DockerSvcAPI.ContainerIsRunning(context.Background()).Hash(hash).Execute()
		if err != nil {
			logger.Warn("Model check error",
				slog.String("modelId", model.Id),
				slog.String("error", err.Error()),
			)
			continue
		}

		if !isRunningRsp.IsRunning {
			ms.printContainerLogs(model.Id, hash)
			continue
		}

		hostRsp, _, err := ms.clientFactory.Client().DockerSvcAPI.GetHost(context.Background()).Execute()
		if err != nil {
			logger.Warn("Docker host error",
				slog.String("error", err.Error()),
			)
			continue
		}
		dockerHost := hostRsp.Host

		singulatronLLMHost := ms.llmHost
		if singulatronLLMHost != "" {
			dockerHost = singulatronLLMHost
		}

		if !strings.HasPrefix(dockerHost, "http") {
			dockerHost = "http://" + dockerHost
		}

		host := strings.TrimPrefix(dockerHost, "http://")

		err = pingAddress(host, port)
		if err != nil {
			logger.Warn("Ping to LLM address failed",
				slog.String("address", host),
				slog.Int("port", port),
				slog.String("error", err.Error()),
			)
			state.SetAnswering(false)

			ms.printContainerLogs(model.Id, hash)
			continue
		}

		logger.Debug("LLM pinged successfully", slog.Int("port", port))
		state.SetAnswering(true)
		return
	}
}

func (ms *ModelService) printContainerLogs(modelId, hash string) {
	summaryRsp, _, err := ms.clientFactory.Client().DockerSvcAPI.ContainerSummary(context.Background()).Hash(hash).Lines(10).Execute()
	if err != nil {
		logger.Warn("Error getting container logs",
			slog.String("modelId", modelId),
			slog.String("error", err.Error()),
		)
	} else {
		logger.Info("Container logs for model that is not running",
			slog.String("logs", summaryRsp.Summary),
		)
	}
}

func pingAddress(host string, port int) error {
	address := fmt.Sprintf("%s:%d", host, port)
	conn, err := net.DialTimeout("tcp", address, 2*time.Second)
	if err != nil {
		return err
	}
	defer conn.Close()
	return nil
}
