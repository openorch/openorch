/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package chatservice

import (
	"context"
	"encoding/json"
	"errors"
	"log/slog"
	"time"

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	"github.com/singulatron/superplatform/sdk/go/logger"

	chattypes "github.com/singulatron/superplatform/server/internal/services/chat/types"
)

func (a *ChatService) addMessage(ctx context.Context, chatMessage *chattypes.Message) error {
	if chatMessage.ThreadId == "" {
		return errors.New("empty chat message thread id")
	}
	if chatMessage.Id == "" {
		chatMessage.Id = sdk.Id("msg")
	}
	if chatMessage.CreatedAt.IsZero() {
		chatMessage.CreatedAt = time.Now()
	}

	threads, err := a.threadsStore.Query(
		datastore.Equals(datastore.Field("id"), chatMessage.ThreadId),
	).Find()
	if err != nil {
		return err
	}

	if len(threads) == 0 {
		return errors.New("thread does not exist")
	}

	logger.Info("Saving chat message",
		slog.String("messageId", chatMessage.Id),
	)

	ev := chattypes.EventMessageAdded{
		ThreadId: chatMessage.ThreadId,
	}

	var m map[string]interface{}
	js, _ := json.Marshal(ev)
	json.Unmarshal(js, &m)

	_, err = a.clientFactory.Client(sdk.WithToken(a.token)).FirehoseSvcAPI.PublishEvent(context.Background()).Event(openapi.FirehoseSvcEventPublishRequest{
		Event: &openapi.FirehoseSvcEvent{
			Name: openapi.PtrString(ev.Name()),
			Data: m,
		},
	}).Execute()
	if err != nil {
		logger.Error("Failed to publish: %v", err)
	}

	return a.messagesStore.Query(
		datastore.Equals(datastore.Field("id"), chatMessage.Id),
	).Upsert(chatMessage)
}
