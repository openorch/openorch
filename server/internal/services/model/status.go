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
	"fmt"
	"log/slog"

	"github.com/pkg/errors"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	"github.com/singulatron/superplatform/sdk/go/logger"
	downloadtypes "github.com/singulatron/superplatform/server/internal/services/download/types"
	modeltypes "github.com/singulatron/superplatform/server/internal/services/model/types"
)

func (ms *ModelService) status(
	modelId string,
) (*modeltypes.ModelStatus, error) {
	hostRsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
		DockerSvcAPI.GetHost(context.Background()).
		Execute()
	if err != nil {
		return nil, err
	}

	dockerHost := hostRsp.Host
	singulatronLLMHost := ms.llmHost
	if singulatronLLMHost != "" {
		dockerHost = singulatronLLMHost
	}

	modelAddress := fmt.Sprintf("%v:%v", dockerHost, hostPortNum)

	if modelId == "" {
		rsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
			ConfigSvcAPI.GetConfig(context.Background()).
			Execute()
		if err != nil {
			return nil, err
		}

		if *rsp.Config.Model.CurrentModelId == "" {
			return nil, errors.New("no model id specified and no default model")
		}
		modelId = *rsp.Config.Model.CurrentModelId
	}

	modelI, found, err := ms.modelsStore.Query(
		datastore.Id(modelId),
	).FindOne()
	if err != nil {
		return nil, err
	}
	if !found {
		return nil, errors.New("model not found")
	}
	model := modelI.(*modeltypes.Model)

	for _, assetUrl := range model.Assets {
		rsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
			DownloadSvcAPI.GetDownload(context.Background(), assetUrl).
			Execute()
		if err != nil {
			return nil, err
		}
		if !rsp.Exists ||
			*rsp.Download.Status != string(
				downloadtypes.DownloadStatusCompleted,
			) {
			return &modeltypes.ModelStatus{
				AssetsReady: false,
				Address:     modelAddress,
			}, nil
		}
	}

	platformI, found, err := ms.platformsStore.Query(
		datastore.Id(model.PlatformId),
	).FindOne()
	if err != nil {
		return nil, err
	}
	if !found {
		return nil, errors.New("cannot find platform")
	}
	platform := platformI.(*modeltypes.Platform)

	hash, err := modelToHash(model, platform)
	if err != nil {
		return nil, err
	}

	isRunning := false

	hashRsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
		DockerSvcAPI.ContainerIsRunning(context.Background()).
		Hash(hash).
		Execute()
	if err != nil {
		logger.Warn("Checking if running error",
			slog.String("error", err.Error()),
		)
	}
	if err == nil && hashRsp.IsRunning {
		isRunning = true
	}

	// @todo lock this
	if v, ok := ms.modelPortMap[hostPortNum]; ok {
		if !v.Answering {
			isRunning = false
		}
	}

	return &modeltypes.ModelStatus{
		Running:     isRunning,
		AssetsReady: true,
		Address:     modelAddress,
	}, nil
}
