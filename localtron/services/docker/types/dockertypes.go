/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package docker_svc

type ErrorResponse struct {
	Error string `json:"error"`
}

type LaunchOptions struct {
	Name       string            `json:"name,omitempty"`
	Envs       []string          `json:"envs,omitempty"`
	Labels     map[string]string `json:"labels,omitempty"`
	HostBinds  []string          `json:"hostBinds,omitempty"`
	GPUEnabled bool              `json:"gpuEnabled,omitempty"`
	Hash       string            `json:"hash,omitempty"`
}

type LaunchInfo struct {
	NewContainerStarted bool
	PortNumber          int
}

type ModelLaunchRequest struct{}

type OnModelLaunch struct {
	Error *string `json:"error,omitempty"`
}

type GetInfoResponse struct {
	Info *DockerInfo `json:"info"`
}

type DockerInfo struct {
	HasDocker           bool    `json:"hasDocker"`
	DockerDaemonAddress *string `json:"dockerDaemonAddress,omitempty"`
	Error               *string `json:"error,omitempty"`
}

//
// Events
//

// @todo nothing to trigger this yet
const EventDockerInfoUpdatedName = "dockerInfoUpdated"

type EventDockerInfoUpdated struct {
	ThreadId string `json:"threadId"`
}

func (e EventDockerInfoUpdated) Name() string {
	return EventDockerInfoUpdatedName
}

type LaunchContainerRequest struct {
	Image    string         `json:"image"`
	Port     int            `json:"port"`
	HostPort int            `json:"hostPort"`
	Options  *LaunchOptions `json:"options"`
}

type LaunchContainerResponse struct {
	Info *LaunchInfo `json:"info"`
}

type GetContainerSummaryRequest struct {
	Hash  string `json:"hash"`
	Lines int    `json:"lines"`
}

type GetContainerSummaryResponse struct {
	Summary string `json:"summary"`
}

type ContainerIsRunningRequest struct {
	Hash string `json:"hash"`
}

type ContainerIsRunningResponse struct {
	IsRunning bool `json:"isRunning"`
}

type GetDockerHostRequest struct{}

type GetDockerHostResponse struct {
	Host string `json:"host"`
}
