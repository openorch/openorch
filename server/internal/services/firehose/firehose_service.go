/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package firehoseservice

import (
	"context"
	"log"
	"log/slog"
	"sync"

	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	"github.com/singulatron/superplatform/sdk/go/lock"
	"github.com/singulatron/superplatform/sdk/go/logger"
	"github.com/singulatron/superplatform/sdk/go/router"

	firehosetypes "github.com/singulatron/superplatform/server/internal/services/firehose/types"
)

type FirehoseService struct {
	router *router.Router
	lock   lock.DistributedLock

	subscribers map[int]func(events []*firehosetypes.Event)
	mu          sync.Mutex
	nextID      int

	credentialStore datastore.DataStore
}

func NewFirehoseService(
	r *router.Router,
	lock lock.DistributedLock,
	datastoreFactory func(tableName string, instance any) (datastore.DataStore, error),
) (*FirehoseService, error) {
	credentialStore, err := datastoreFactory("firehoseSvcCredentials", &sdk.Credential{})
	if err != nil {
		return nil, err
	}

	service := &FirehoseService{
		router:          r,
		lock:            lock,
		credentialStore: credentialStore,
		subscribers:     make(map[int]func(events []*firehosetypes.Event)),
	}

	return service, nil
}

func (fs *FirehoseService) Start() error {
	ctx := context.Background()
	fs.lock.Acquire(ctx, "firehose-service-start")
	defer fs.lock.Release(ctx, "firehose-service-start")

	token, err := sdk.RegisterService("firehose-svc", "Firehose Service", fs.router, fs.credentialStore)
	if err != nil {
		return err
	}
	fs.router = fs.router.SetBearerToken(token)

	return fs.registerPermissions()
}

func (fs *FirehoseService) publishMany(events ...*firehosetypes.Event) {
	for _, event := range events {
		logger.Debug("Event published",
			slog.String("eventName", event.Name),
		)
	}
	fs.mu.Lock()
	defer fs.mu.Unlock()
	for _, subscriber := range fs.subscribers {
		go func(subscriber func(events []*firehosetypes.Event)) {
			defer func() {
				if r := recover(); r != nil {
					log.Printf("Recovered in subscriber: %v", r)
				}
			}()
			subscriber(events)
		}(subscriber)
	}
}

func (fs *FirehoseService) publish(event *firehosetypes.Event) {
	fs.publishMany(event)
}

func (fs *FirehoseService) subscribe(callback func(events []*firehosetypes.Event)) int {
	fs.mu.Lock()
	defer fs.mu.Unlock()
	id := fs.nextID
	fs.subscribers[id] = callback
	fs.nextID++
	return id
}

func (fs *FirehoseService) unsubscribe(id int) {
	fs.mu.Lock()
	defer fs.mu.Unlock()
	delete(fs.subscribers, id)
}