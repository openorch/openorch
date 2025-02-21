/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
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

	"github.com/flusflas/dipper"
	"github.com/pkg/errors"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	"github.com/openorch/openorch/sdk/go/logger"

	modeltypes "github.com/openorch/openorch/server/internal/services/model/types"
)

// This obviously means there is a single container that can be active at the moment on a node.
const hostPortNum = 8001

/*
Starts the model which has the supplied modelId or the currently activated one of
the modelId is empty.
*/
func (ms *ModelService) start(modelId string) error {
	getConfigResponse, _, err := ms.clientFactory.Client().
		ConfigSvcAPI.GetConfig(context.Background()).
		Execute()
	if err != nil {
		return err
	}

	if modelId == "" {
		modelIdI := dipper.Get(getConfigResponse.Config.Data, "model-svc.currentModelId")
		var ok bool
		modelId, ok = modelIdI.(string)
		if !ok {
			modelId = DefaultModelId
		}
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

func (ms *ModelService) startWithDocker(
	model *modeltypes.Model,
	platform *modeltypes.Platform,
) error {
	launchOptions := &openapi.ContainerSvcRunContainerOptions{}

	image := platform.Architectures.Default.Container.ImageTemplate
	port := platform.Architectures.Default.Container.Port
	launchOptions.Envs = platform.Architectures.Default.Container.Envars
	launchOptions.Keeps = platform.Architectures.Default.Container.Keeps
	launchOptions.Assets = &model.Assets

	switch ms.gpuPlatform {
	case "cuda":
		launchOptions.GpuEnabled = openapi.PtrBool(true)

		if platform.Architectures.Cuda.Container.ImageTemplate != "" {
			cudaImageTemplate := platform.Architectures.Cuda.Container.ImageTemplate

			// We need to resolve CUDA image templates like
			// "crufter/llama-cpp-python:cuda-$cudaVersion-latest"
			// to actual images here.
			// To do this we need to find the CUDA version on the current machine.

			cudaVersion, err := ms.cudaVersion(platform.Architectures.Cuda.CudaVersionPrecision)
			if err != nil {
				logger.Error("Error getting cuda version, defaulting",
					slog.String("error", err.Error()),
					slog.String("default", cudaVersion))

				cudaVersion = platform.Architectures.Cuda.DefaultCudaVersion
			}

			versionAccurateImage := strings.Replace(cudaImageTemplate, "$cudaVersion", cudaVersion, -1)

			imagePullableRsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
				ContainerSvcAPI.
				ImagePullable(context.Background(), versionAccurateImage).
				Execute()
			if err != nil {
				logger.Error("Image pull check failed", slog.String("error", err.Error()))
			}

			if err != nil || !imagePullableRsp.Pullable {
				image = strings.Replace(cudaImageTemplate, "$cudaVersion", cudaVersion, -1)
			} else {
				image = versionAccurateImage
			}
		}
		if platform.Architectures.Cuda.Container.Port != 0 {
			port = platform.Architectures.Cuda.Container.Port
		}
		if len(platform.Architectures.Cuda.Container.Envars) > 0 {
			launchOptions.Envs = platform.Architectures.Cuda.Container.Envars
		}
		if len(platform.Architectures.Cuda.Container.Keeps) > 0 {
			launchOptions.Keeps = platform.Architectures.Cuda.Container.Keeps
		}
	}

	hash, err := modelToHash(model, platform)
	if err != nil {
		return err
	}
	launchOptions.Hash = openapi.PtrString(hash)

	runRsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
		ContainerSvcAPI.RunContainer(context.Background()).
		Body(
			openapi.ContainerSvcRunContainerRequest{
				Image:    image,
				Port:     int32(port),
				HostPort: openapi.PtrInt32(int32(hostPortNum)),
				Options:  launchOptions,
			},
		).
		Execute()
	if err != nil {
		return errors.Wrap(err, "failed to launch container")
	}

	if *runRsp.Info.NewContainerStarted {
		state := ms.get(int(*runRsp.Info.PortNumber))
		if !state.HasCheckerRunning {
			go ms.checkIfAnswers(
				model,
				platform,
				int(*runRsp.Info.PortNumber),
				state,
			)
		}
	}

	return nil
}

func (ms *ModelService) cudaVersion(precision int) (string, error) {
	node, err := ms.getNode()
	if err != nil || node == nil {
		// Error as unresolved image templates won't be usable
		return "", errors.Wrap(err, "cannot get current node")
	}
	if len(node.Gpus) == 0 {
		return "", fmt.Errorf("no gpus")
	}
	gpu := node.Gpus[0]
	if gpu.CudaVersion == nil {
		return "", fmt.Errorf("no cuda version")
	}

	cudaVersion := *gpu.CudaVersion

	if precision > strings.Count(cudaVersion, ".")+1 {
		// Here we need to make sure that the CUDA version coming from the GPU
		// like 12.2 is the same length as our image tags, which are 12.2.0.
		cudaVersion = longCudaVersionFormat(cudaVersion)
	}

	return cudaVersion, nil
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

func modelToHash(
	model *modeltypes.Model,
	platform *modeltypes.Platform,
) (string, error) {
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

		isRunningRsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
			ContainerSvcAPI.ContainerIsRunning(context.Background()).
			Hash(hash).
			Execute()
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

		hostRsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
			ContainerSvcAPI.GetHost(context.Background()).
			Execute()
		if err != nil {
			logger.Warn("Docker host error",
				slog.String("error", err.Error()),
			)
			continue
		}
		dockerHost := hostRsp.Host

		openorchLLMHost := ms.llmHost
		if openorchLLMHost != "" {
			dockerHost = openorchLLMHost
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

		logger.Debug("AI engine pinged successfully", slog.Int("port", port))
		state.SetAnswering(true)
		return
	}
}

func (ms *ModelService) printContainerLogs(modelId, hash string) {
	summaryRsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
		ContainerSvcAPI.ContainerSummary(context.Background()).
		Hash(hash).
		Lines(10).
		Execute()
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

func longCudaVersionFormat(gpuCudaVersion string) string {
	// Split the incoming CUDA version by '.' to check the length
	parts := strings.Split(gpuCudaVersion, ".")

	// If it's already in the correct length (3 parts), return as is
	if len(parts) == 3 {
		return gpuCudaVersion + ".0"
	}

	// If it's not in the correct format, ensure it matches by appending ".0"
	return gpuCudaVersion + ".0"
}
