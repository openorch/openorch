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

	"github.com/flusflas/dipper"
	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/pkg/errors"
)

func (ms *ModelService) makeDefault(ctx context.Context, modelId string) error {
	stat, err := ms.status(modelId)
	if err != nil {
		return err
	}
	if !stat.AssetsReady {
		return fmt.Errorf("cannot set model as it is not downloaded yet")
	}

	rsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
		ConfigSvcAPI.GetConfig(ctx).
		Execute()

	if err != nil {
		return err
	}

	err = dipper.Set(rsp.Config.Data, "$.model-svc.currentModelId", modelId)
	if err != nil {
		return errors.Wrap(err, "failed to set current model id")
	}

	_, _, err = ms.clientFactory.Client(sdk.WithToken(ms.token)).
		ConfigSvcAPI.SaveConfig(ctx).
		Body(openapi.ConfigSvcSaveConfigRequest{
			Config: rsp.Config,
		}).
		Execute()

	return err
}
