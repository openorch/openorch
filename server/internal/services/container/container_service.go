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
	"fmt"
	"sync"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	"github.com/openorch/openorch/sdk/go/lock"
)

type DockerService struct {
	clientFactory sdk.ClientFactory
	token         string

	lock lock.DistributedLock

	imagesCache          map[string]bool
	imagePullMutexes     map[string]*sync.Mutex
	imagePullGlobalMutex sync.Mutex
	runContainerMutex    sync.Mutex
	dockerHost           string
	dockerPort           int
	client               *client.Client
	mutex                sync.Mutex

	credentialStore datastore.DataStore

	volumeName string
}

func NewContainerService(
	volumeName string,
	clientFactory sdk.ClientFactory,
	lock lock.DistributedLock,
	datastoreFactory func(tableName string, instance any) (datastore.DataStore, error),
) (*DockerService, error) {
	c, err := client.NewClientWithOpts(
		client.FromEnv,
		client.WithAPIVersionNegotiation(),
	)
	if err != nil {
		return nil, err
	}

	credentialStore, err := datastoreFactory(
		"dockerSvcCredentials",
		&sdk.Credential{},
	)
	if err != nil {
		return nil, err
	}

	service := &DockerService{
		clientFactory:   clientFactory,
		lock:            lock,
		credentialStore: credentialStore,

		client:           c,
		imagePullMutexes: make(map[string]*sync.Mutex),
		imagesCache:      make(map[string]bool),

		volumeName: volumeName,
	}

	return service, nil
}

func (ds *DockerService) Start() error {
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

	return ds.registerPermissions()
}

func (ds *DockerService) getDockerHost() (string, error) {
	// Docker host should only exist for cases like WSL when the
	// Docker host address is not localhost.
	// Here instead of trying to return localhost we will try to find the docker bridge
	// ip so containers can address each other.
	if ds.dockerHost == "" {
		return ds.getDockerBridgeIP()
	}
	return ds.dockerHost, nil
}

func (ds *DockerService) getDockerPort() int {
	return ds.dockerPort
}

type InterfaceInfo struct {
	Name        string
	IPAddresses []string
}

func (d *DockerService) getDockerBridgeIP() (string, error) {
	ctx := context.Background()

	networks, err := d.client.NetworkList(ctx, types.NetworkListOptions{})
	if err != nil {
		return "", fmt.Errorf("failed to list Docker networks: %w", err)
	}

	for _, network := range networks {
		if network.Name == "bridge" {
			for _, config := range network.IPAM.Config {
				if config.Gateway != "" {
					return config.Gateway, nil
				}
			}
		}
	}

	return "", fmt.Errorf("Docker bridge network not found")
}
