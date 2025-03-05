/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package containerservice

import (
	"context"
	"log/slog"
	"sync"
	"time"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	"github.com/openorch/openorch/sdk/go/lock"
	"github.com/openorch/openorch/sdk/go/logger"
	"github.com/pkg/errors"

	"github.com/openorch/openorch/server/internal/services/container/backends"
	dockerbackend "github.com/openorch/openorch/server/internal/services/container/backends/docker"
)

type ContainerService struct {
	clientFactory sdk.ClientFactory
	token         string

	lock lock.DistributedLock

	dockerBackend backends.ContainerBackend

	credentialStore datastore.DataStore
	containerStore  datastore.DataStore

	selfNode      *openapi.RegistrySvcNode
	selfNodeMutex sync.Mutex

	volumeName           string
	containerLoopTrigger chan bool
}

func NewContainerService(
	volumeName string,
	clientFactory sdk.ClientFactory,
	lock lock.DistributedLock,
	datastoreFactory func(
		tableName string,
		instance any,
	) (datastore.DataStore, error),
) (*ContainerService, error) {
	credentialStore, err := datastoreFactory(
		"containerSvcCredentials",
		&sdk.Credential{},
	)
	if err != nil {
		return nil, err
	}

	containerStore, err := datastoreFactory(
		"containerSvcCredentials",
		&sdk.Credential{},
	)
	if err != nil {
		return nil, err
	}

	service := &ContainerService{
		clientFactory: clientFactory,
		lock:          lock,

		credentialStore: credentialStore,
		containerStore:  containerStore,

		volumeName: volumeName,
	}

	return service, nil
}

func (ds *ContainerService) Start() error {
	ctx := context.Background()
	ds.lock.Acquire(ctx, "container-svc-start")
	defer ds.lock.Release(ctx, "container-svc-start")

	token, err := sdk.RegisterServiceAccount(
		ds.clientFactory.Client().UserSvcAPI,
		"container-svc",
		"Container Svc",
		ds.credentialStore,
	)
	if err != nil {
		return err
	}
	ds.token = token

	dockerBackend, err := dockerbackend.NewDockerBackend(
		ds.volumeName,
		ds.clientFactory,
		ds.token,
	)
	if err != nil {
		return err
	}
	ds.dockerBackend = dockerBackend

	go ds.containerLoop()

	return ds.registerPermissions()
}

type InterfaceInfo struct {
	Name        string
	IPAddresses []string
}

func (ms *ContainerService) containerLoop() {
	ticker := time.NewTicker(1000 * time.Millisecond)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
		case <-ms.containerLoopTrigger:
		}

		err := ms.containerLoopCycle()
		if err != nil {
			logger.Error("Error processing prompt",
				slog.String("error", err.Error()),
			)
		}
	}
}

func (ms *ContainerService) containerLoopCycle() error {
	//node, err := ms.selfNode()
	//if err != nil {
	//	return err
	//}
	//
	//containers, err := ms.client.ContainerList(context.Background(), container.ListOptions{})
	//if err != nil {
	//	return nil
	//}

	return nil
}

func (ms *ContainerService) getNode() (*openapi.RegistrySvcNode, error) {
	ms.selfNodeMutex.Lock()
	defer ms.selfNodeMutex.Unlock()

	if ms.selfNode != nil {
		return ms.selfNode, nil
	}

	rsp, _, err := ms.clientFactory.Client(sdk.WithToken(ms.token)).
		RegistrySvcAPI.SelfNode(context.Background()).
		Execute()

	if err != nil {
		return nil, errors.Wrap(err, "error getting self node from model service")
	}

	ms.selfNode = &rsp.Node

	return ms.selfNode, nil
}
