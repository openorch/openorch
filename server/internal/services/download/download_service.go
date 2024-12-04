/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package downloadservice

import (
	"context"
	"encoding/json"
	"log/slog"
	"os"
	"path"
	"sync"
	"time"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	"github.com/openorch/openorch/sdk/go/lock"
	"github.com/openorch/openorch/sdk/go/logger"
	types "github.com/openorch/openorch/server/internal/services/download/types"
)

type DownloadService struct {
	clientFactory sdk.ClientFactory
	token         string

	dlock lock.DistributedLock

	downloads map[string]*types.Download
	lock      sync.Mutex

	StateFilePath string
	DefaultFolder string
	hasChanged    bool

	// for testing purposes
	SyncDownloads bool

	credentialStore datastore.DataStore
}

func NewDownloadService(
	clientFactory sdk.ClientFactory,
	lock lock.DistributedLock,
	datastoreFactory func(tableName string, instance any) (datastore.DataStore, error),
) (*DownloadService, error) {
	home, _ := os.UserHomeDir()

	credentialStore, err := datastoreFactory(
		"downloadSvcCredentials",
		&sdk.Credential{},
	)
	if err != nil {
		return nil, err
	}

	ret := &DownloadService{
		clientFactory: clientFactory,

		credentialStore: credentialStore,
		dlock:           lock,

		StateFilePath: path.Join(home, "downloads.json"),
		downloads:     make(map[string]*types.Download),
	}

	return ret, nil
}

func (dm *DownloadService) SetDefaultFolder(s string) {
	dm.DefaultFolder = s
}

func (dm *DownloadService) SetStateFilePath(s string) {
	dm.StateFilePath = s
}

func (dm *DownloadService) Start() error {
	ctx := context.Background()
	dm.dlock.Acquire(ctx, "download-svc-start")
	defer dm.dlock.Release(ctx, "download-svc-start")

	token, err := sdk.RegisterService(
		dm.clientFactory.Client().UserSvcAPI,
		"download-svc",
		"Download Service",
		dm.credentialStore,
	)
	if err != nil {
		return err
	}
	dm.token = token

	err = dm.registerPermissions()
	if err != nil {
		return err
	}

	err = dm.loadState()
	if err != nil {
		return err
	}

	for _, download := range dm.downloads {
		if download.Status == types.DownloadStatusInProgress {
			err = dm.do(download.URL, path.Dir(download.FilePath))
			if err != nil {
				return err
			}
		}
	}

	go dm.periodicSaveState()

	return err
}

func (dm *DownloadService) loadState() error {
	dm.lock.Lock()
	defer dm.lock.Unlock()

	_, err := os.Stat(dm.StateFilePath)
	if os.IsNotExist(err) {
		err = os.MkdirAll(path.Dir(dm.StateFilePath), 0755)
		if err != nil {
			return err
		}
		err = os.WriteFile(dm.StateFilePath, []byte("{}"), 0755)
		if err != nil {
			return err
		}
	} else if err != nil {
		return err
	}

	data, err := os.ReadFile(dm.StateFilePath)
	if err != nil {
		return err
	}
	return json.Unmarshal(data, &dm.downloads)
}

func (ds *DownloadService) markChanged() {
	ds.lock.Lock()
	defer ds.lock.Unlock()
	ds.hasChanged = true
}

func (ds *DownloadService) markChangedWithoutLock() {
	ds.hasChanged = true
}

func (ds *DownloadService) saveState() error {
	ds.lock.Lock()
	data, err := json.MarshalIndent(ds.downloads, "", "  ")
	if err != nil {
		ds.lock.Unlock()
		return err
	}
	ds.hasChanged = false
	ds.lock.Unlock()

	_, err = ds.clientFactory.Client(sdk.WithToken(ds.token)).
		FirehoseSvcAPI.PublishEvent(context.Background()).
		Event(openapi.FirehoseSvcEventPublishRequest{
			Event: &openapi.FirehoseSvcEvent{
				Name: openapi.PtrString(types.EventDownloadStatusChangeName),
			},
		}).
		Execute()
	if err != nil {
		logger.Error("Failed to publish firehose event", slog.Any("error", err))
	}

	err = os.WriteFile(ds.StateFilePath, data, 0666)
	if err != nil {
		return err
	}

	return nil
}

func (ds *DownloadService) periodicSaveState() {
	for {
		time.Sleep(1 * time.Second) // Control the throttle rate here
		ds.lock.Lock()
		if ds.hasChanged {
			ds.lock.Unlock()
			if err := ds.saveState(); err != nil {
				logger.Error(
					"Failed to save state",
					slog.String("error", err.Error()),
				)
			}
		} else {
			ds.lock.Unlock()
		}
	}
}

func (dm *DownloadService) getDownload(url string) (*types.Download, bool) {
	dm.lock.Lock()
	defer dm.lock.Unlock()

	v, ok := dm.downloads[url]
	return v, ok
}
