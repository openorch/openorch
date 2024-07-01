/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */
package chatservice

import (
	"github.com/singulatron/singulatron/localtron/datastore"

	chattypes "github.com/singulatron/singulatron/localtron/services/chat/types"
	configservice "github.com/singulatron/singulatron/localtron/services/config"
	firehoseservice "github.com/singulatron/singulatron/localtron/services/firehose"
	userservice "github.com/singulatron/singulatron/localtron/services/user"

	storefactoryservice "github.com/singulatron/singulatron/localtron/services/store_factory"
)

type ChatService struct {
	configService   *configservice.ConfigService
	userService     *userservice.UserService
	firehoseService *firehoseservice.FirehoseService

	messagesStore datastore.DataStore[*chattypes.Message]
	threadsStore  datastore.DataStore[*chattypes.Thread]
	assetsStore   datastore.DataStore[*chattypes.Asset]
}

func NewChatService(
	cs *configservice.ConfigService,
	fs *firehoseservice.FirehoseService,
	userService *userservice.UserService,
) (*ChatService, error) {
	threadsStore, err := storefactoryservice.GetStore[*chattypes.Thread]("threads")
	if err != nil {
		return nil, err
	}
	messagesStore, err := storefactoryservice.GetStore[*chattypes.Message]("messages")
	if err != nil {
		return nil, err
	}
	assetsStore, err := storefactoryservice.GetStore[*chattypes.Asset]("assets")
	if err != nil {
		return nil, err
	}

	service := &ChatService{
		configService:   cs,
		firehoseService: fs,
		userService:     userService,

		messagesStore: messagesStore,
		threadsStore:  threadsStore,
		assetsStore:   assetsStore,
	}

	err = service.registerPermissions()
	if err != nil {
		return nil, err
	}

	return service, nil
}
