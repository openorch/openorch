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
	"io/ioutil"
	"log/slog"
	"path"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/logger"
	types "github.com/openorch/openorch/server/internal/services/config/types"
	"github.com/pkg/errors"
	"gopkg.in/yaml.v2"
)

func (cs *ConfigService) saveConfig(config types.Config) error {
	cs.configFileMutex.Lock()
	defer cs.configFileMutex.Unlock()

	cs.config = config

	data, err := yaml.Marshal(cs.config)
	if err != nil {
		return errors.Wrap(err, "error saving config")
	}
	if err := ioutil.WriteFile(path.Join(cs.ConfigDirectory, cs.ConfigFileName), data, 0644); err != nil {
		return errors.Wrap(err, "error writing config file")
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
