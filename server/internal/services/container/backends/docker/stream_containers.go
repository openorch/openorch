package dockerbackend

import (
	"context"
	"log"
	"os"
	"strconv"
	"strings"
	"sync"

	"github.com/davecgh/go-spew/spew"
	"github.com/docker/docker/api/types"
	dockercontainer "github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/events"
	"github.com/docker/docker/client"
	container "github.com/openorch/openorch/server/internal/services/container/types"
)

type ContainerTracker struct {
	mu         sync.Mutex
	containers map[string]container.Container
}

func NewContainerTracker() *ContainerTracker {
	return &ContainerTracker{
		containers: map[string]container.Container{},
	}
}

func StartDockerContainerTracker(cli *client.Client, tracker *ContainerTracker) {
	ctx := context.Background()
	eventChan, errChan := cli.Events(ctx, types.EventsOptions{})

	// Initialize active container list
	containers, err := cli.ContainerList(ctx, dockercontainer.ListOptions{All: true})
	if err != nil {
		log.Fatal("Error listing containers:", err)
	}
	for _, c := range containers {
		tracker.AddContainerFromList(c)
	}

	for {
		select {
		case event := <-eventChan:
			if event.Type == events.ContainerEventType {
				switch event.Action {
				case "start":
					go func(containerID string) {
						info, err := cli.ContainerInspect(ctx, containerID)
						if err != nil {
							log.Println("Error inspecting container:", err)
							return
						}
						tracker.AddContainerFromInspect(info)
					}(event.Actor.ID)
				case "die":
					tracker.RemoveContainer(event.Actor.ID)
				}
			}
		case err := <-errChan:
			if err != nil {
				log.Println("Docker event listener error:", err)
			}
		}
	}
}

func (t *ContainerTracker) AddContainerFromList(c types.Container) {
	t.mu.Lock()
	defer t.mu.Unlock()

	t.containers[c.ID] = container.Container{
		Id:       c.ID,
		NodeId:   os.Getenv("OPENORCH_NODE_ID"),
		Name:     strings.TrimPrefix(c.Names[0], "/"),
		Image:    c.Image,
		Port:     extractPortFromList(c),
		HostPort: extractHostPortFromList(c),
		Labels:   c.Labels,
		Status:   c.State,
	}
}

func (t *ContainerTracker) AddContainerFromInspect(info types.ContainerJSON) {
	t.mu.Lock()
	defer t.mu.Unlock()

	t.containers[info.ID] = container.Container{
		Id:         info.ID,
		NodeId:     os.Getenv("OPENORCH_NODE_ID"),
		Name:       info.Name,
		Image:      info.Config.Image,
		Port:       extractPortFromInspect(info),
		HostPort:   extractHostPortFromInspect(info),
		Hash:       info.Config.Labels["hash"],
		Labels:     info.Config.Labels,
		Envs:       info.Config.Env,
		Keeps:      extractKeeps(info),
		GPUEnabled: checkGPUEnabled(info),
		Status:     info.State.Status,
	}
}

func (t *ContainerTracker) RemoveContainer(containerID string) {
	t.mu.Lock()
	defer t.mu.Unlock()
	delete(t.containers, containerID)
}

func (t *ContainerTracker) GetContainers() []container.Container {
	t.mu.Lock()
	defer t.mu.Unlock()

	var result []container.Container
	for _, c := range t.containers {
		result = append(result, c)
	}
	return result
}

func extractPortFromList(c types.Container) int {
	if len(c.Ports) > 0 {
		return int(c.Ports[0].PrivatePort)
	}
	return 0
}

func extractHostPortFromList(c types.Container) int {
	if len(c.Ports) > 0 {
		// Example:
		// ([]types.Port) (len=3 cap=4) {
		// (types.Port) {
		//	IP: (string) "",
		//	PrivatePort: (uint16) 80,
		//	PublicPort: (uint16) 0,
		//	Type: (string) (len=3) "tcp"
		//   },
		//   (types.Port) {
		//	IP: (string) (len=7) "0.0.0.0",
		//	PrivatePort: (uint16) 8080,
		//	PublicPort: (uint16) 8081,
		//	Type: (string) (len=3) "tcp"
		//   },
		//   (types.Port) {
		//	IP: (string) (len=2) "::",
		//	PrivatePort: (uint16) 8080,
		//	PublicPort: (uint16) 8081,
		//	Type: (string) (len=3) "tcp"
		//   }
		//  }
		for _, port := range c.Ports {
			if port.IP == "0.0.0.0" {
				return int(port.PublicPort)
			}
		}
	}
	return 0
}

func extractPortFromInspect(info types.ContainerJSON) int {
	if len(info.Config.ExposedPorts) > 0 {
		for port := range info.Config.ExposedPorts {
			p, _ := strconv.Atoi(strings.Split(string(port), "/")[0])
			return p
		}
	}
	return 0
}

func extractHostPortFromInspect(info types.ContainerJSON) int {
	spew.Dump("host port inspect", info.NetworkSettings)
	if len(info.NetworkSettings.Ports) > 0 {
		for _, bindings := range info.NetworkSettings.Ports {
			if len(bindings) > 0 {
				p, _ := strconv.Atoi(bindings[0].HostPort)
				return p
			}
		}
	}
	return 0
}

func extractKeeps(info types.ContainerJSON) []string {
	var keeps []string
	for _, mount := range info.Mounts {
		keeps = append(keeps, mount.Destination)
	}
	return keeps
}

func checkGPUEnabled(info types.ContainerJSON) bool {
	return len(info.HostConfig.DeviceRequests) > 0
}
