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

	"github.com/pkg/errors"

	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	"github.com/openorch/openorch/sdk/go/lock"
	types "github.com/openorch/openorch/server/internal/services/config/types"
)

type ConfigService struct {
	clientFactory sdk.ClientFactory
	token         string

	lock lock.DistributedLock

	credentialStore datastore.DataStore
	configStore     datastore.DataStore

	datastoreFactory func(tableName string, instance any) (datastore.DataStore, error)

	config types.Config
}

func NewConfigService(lock lock.DistributedLock) (*ConfigService, error) {
	cs := &ConfigService{
		lock: lock,
	}

	return cs, nil
}

func (cs *ConfigService) SetClientFactory(clientFactory sdk.ClientFactory) {
	cs.clientFactory = clientFactory
}

func (cs *ConfigService) SetDatastoreFactory(
	datastoreFactory func(tableName string, instance any) (datastore.DataStore, error),
) {
	cs.datastoreFactory = datastoreFactory
}

func (cs *ConfigService) Start() error {
	if cs.datastoreFactory == nil {
		return errors.New("no datastore factory")
	}

	credentialStore, err := cs.datastoreFactory(
		"configSvcCredentials",
		&sdk.Credential{},
	)
	if err != nil {
		return err
	}
	cs.credentialStore = credentialStore

	configStore, err := cs.datastoreFactory(
		"configSvcConfig",
		&types.Config{},
	)
	if err != nil {
		return err
	}
	cs.configStore = configStore

	ctx := context.Background()

	cs.lock.Acquire(ctx, "config-svc-start")
	defer cs.lock.Release(ctx, "config-svc-start")

	client := cs.clientFactory.Client()

	token, err := sdk.RegisterService(
		client.UserSvcAPI,
		"config-svc",
		"Config Svc",
		cs.credentialStore,
	)
	if err != nil {
		return err
	}
	cs.token = token

	err = cs.registerPermissions()
	if err != nil {
		return err
	}

	err = cs.loadConfig()
	if err != nil {
		return err
	}
	return nil
}

func (cs *ConfigService) loadConfig() error {
	configIs, err := cs.configStore.Query().Find()
	if err != nil {
		return err
	}
	if len(configIs) == 0 {
		cs.config = types.Config{
			Data: map[string]interface{}{},
		}
	}

	return nil
}
