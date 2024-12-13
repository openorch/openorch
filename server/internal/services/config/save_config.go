/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package configservice

import (
	"context"
	"log/slog"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/logger"
	types "github.com/openorch/openorch/server/internal/services/config/types"
	"github.com/pkg/errors"
)

func (cs *ConfigService) saveConfig(config types.Config) error {
	cs.config = config

	cs.config.Id = "the-config"

	err := cs.configStore.Upsert(cs.config)
	if err != nil {
		return errors.Wrap(err, "failed to save config")
	}

	ev := types.EventConfigUpdate{}
	_, err = cs.clientFactory.Client(sdk.WithToken(cs.token)).
		FirehoseSvcAPI.PublishEvent(context.Background()).
		Event(openapi.FirehoseSvcEventPublishRequest{
			Event: &openapi.FirehoseSvcEvent{
				Name: openapi.PtrString(ev.Name()),
				Data: nil,
			},
		}).
		Execute()

	if err != nil {
		logger.Error("Failed to publish firehose event", slog.Any("error", err))
	}

	return nil
}
