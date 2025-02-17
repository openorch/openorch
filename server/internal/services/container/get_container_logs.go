package containerservice

import (
	"context"
	"fmt"
	"io"
	"strings"

	"github.com/docker/docker/api/types/container"
	"github.com/pkg/errors"
)

type logsAndStatus struct {
	Logs    string `json:"logs"`
	Status  string `json:"status"`
	Summary string `json:"summary"`
}

func (d *DockerService) getContainerLogsAndStatus(
	openorchHash string,
	logCount int,
) (*logsAndStatus, error) {
	ctx := context.Background()
	containers, err := d.client.ContainerList(
		ctx,
		container.ListOptions{All: true},
	)
	if err != nil {
		return nil, errors.Wrap(
			err,
			"error listing docker containers when getting logs",
		)
	}

	for _, modelContainer := range containers {
		if modelContainer.Labels["openorch-hash"] == openorchHash {
			logOptions := container.LogsOptions{
				ShowStdout: true,
				ShowStderr: true,
				Tail:       fmt.Sprintf("%v", logCount),
			}
			logsReader, err := d.client.ContainerLogs(
				ctx,
				modelContainer.ID,
				logOptions,
			)
			if err != nil {
				return nil, errors.Wrap(err, "error getting container logs")
			}
			defer logsReader.Close()

			logs := new(strings.Builder)
			_, err = io.Copy(logs, logsReader)
			if err != nil {
				return nil, errors.Wrap(err, "error reading container logs")
			}

			containerJSON, err := d.client.ContainerInspect(
				ctx,
				modelContainer.ID,
			)
			if err != nil {
				return nil, errors.Wrap(err, "error inspecting container")
			}

			portMappings := []string{}
			if containerJSON.NetworkSettings != nil {
				for port, bindings := range containerJSON.NetworkSettings.Ports {
					for _, binding := range bindings {
						portMappings = append(
							portMappings,
							fmt.Sprintf(
								"%s:%s -> %s",
								binding.HostIP,
								binding.HostPort,
								port,
							),
						)
					}
				}
			} else {
				portMappings = append(portMappings, "unknown")
			}

			state := "unknown"
			healthStatus := "unknown"
			startedAt := "unkown"
			if containerJSON.State != nil {
				state = containerJSON.State.Status
				startedAt = containerJSON.State.StartedAt
				if containerJSON.State.Health != nil {
					healthStatus = containerJSON.State.Health.Status
				}
			}

			containerStatus := fmt.Sprintf(
				"ID: %s\nName: %s\nImage: %s\nState: %s\nStatus: %s\nCreated: %s\nStarted: %s\nPorts: %s\n",
				containerJSON.ID,
				containerJSON.Name,
				containerJSON.Image,
				state,
				healthStatus,
				containerJSON.Created,
				startedAt,
				strings.Join(portMappings, ", "),
			)

			summary := fmt.Sprintf(
				"Container Status:\n%s\n\nContainer Logs:\n%s",
				containerStatus,
				logs.String(),
			)

			return &logsAndStatus{
				Summary: summary,
				Status:  containerStatus,
				Logs:    logs.String(),
			}, nil
		}
	}

	return nil, errors.New(
		"no matching container found for the provided model URL",
	)
}
