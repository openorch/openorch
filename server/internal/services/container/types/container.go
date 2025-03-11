/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package container_svc

type ErrorResponse struct {
	Error string `json:"error"`
}

type Container struct {
	// Id is the unique identifier for the container instance.
	Id string `json:"id"`

	// Node Id
	// Please see the documentation for the envar OPENORCH_NODE_ID
	NodeId string `json:"nodeId"`

	// Name is the human-readable name assigned to the container.
	Name string `json:"name,omitempty"`

	// Image is the Docker image used to create the container.
	Image string `json:"image"`

	// Port is the internal port exposed by the container.
	Port int `json:"port"`

	// HostPort is the port on the host machine mapped to the container’s internal port.
	HostPort int `json:"hostPort"`

	// Hash is a unique identifier associated with the container.
	Hash string `json:"hash,omitempty"`

	// Labels are metadata tags assigned to the container.
	Labels map[string]string `json:"labels,omitempty"`

	// Envs are environment variables set within the container.
	Envs []string `json:"envs,omitempty"`

	// Keeps are paths that persist across container restarts.
	// They function like mounts or volumes, but their external storage location is irrelevant.
	Keeps []string `json:"keeps,omitempty"`

	// GPUEnabled specifies whether GPU support is enabled for the container.
	GPUEnabled bool `json:"gpuEnabled,omitempty"`

	// Status indicates the current state of the container (e.g., running, stopped).
	Status string `json:"status"`
}

func (l *Container) GetId() string {
	return l.Id
}

type RunContainerRequest struct {
	// Image is the Docker image to use for the container
	Image string `json:"image" example:"nginx:latest" binding:"required"`

	// Port is the port number that the container will expose
	Port int `json:"port" example:"8080" binding:"required"`

	// HostPort is the port on the host machine that will be mapped to the container's port
	HostPort int `json:"hostPort" example:"8081"`

	// Options provides additional options for launching the container
	Options *RunContainerOptions `json:"options"`
}

type RunContainerOptions struct {
	// Name is the name of the container
	Name string `json:"name,omitempty"`

	// Hash is a unique identifier for the container
	Hash string `json:"hash,omitempty"`

	// Envs are environment variables to set in the container
	Envs []string `json:"envs,omitempty"`

	// Labels are metadata labels associated with the container
	Labels map[string]string `json:"labels,omitempty"`

	// Keeps are paths that persist across container restarts.
	// They function like mounts or volumes, but their external storage location is irrelevant.
	Keeps []string `json:"keeps,omitempty"`

	// GPUEnabled specifies if GPU support is enabled
	GPUEnabled bool `json:"gpuEnabled,omitempty"`

	// Assets maps environment variable names to file URLs.
	// Example: {"MODEL": "https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q2_K.gguf"}
	// These files are downloaded by the File Svc and mounted in the container.
	// The environment variable `MODEL` will point to the local file path in the container.
	Assets map[string]string `json:"assets,omitempty"`
}

type RunContainerResponse struct {
	NewContainerStarted bool
	PortNumber          int
}

type StopContainerRequest struct {
	Id   string `json:"id"   example:"4378b76e05ba"`
	Name string `json:"name" example:"sup-container-x"`
}

type StopContainerResponse struct{}

type GetContainerSummaryRequest struct {
	Hash  string `json:"hash"`
	Lines int    `json:"lines"`
}

type GetContainerSummaryResponse struct {
	Status string `json:"status"  binding:"required"`
	Logs   string `json:"logs"    binding:"required"`

	// DEPRECATED. Summary contains both Status and Logs.
	Summary string `json:"summary" binding:"required"`
}

// This is only used by the backends, not by the HTTP methods
type ContainerIsRunningRequest struct {
	Hash string
	Name string
}

type ContainerIsRunningResponse struct {
	IsRunning bool `json:"isRunning" binding:"required"`
}

type ListContainersRequest struct {
	NodeId      string `json:"nodeId,omitempty"`
	ContainerId string `json:"containerId,omitempty"`
	Limit       int64  `json:"limit,omitempty"`
}

type ListContainersResponse struct {
	Containers []*Container `json:"containers,omitempty"`
}
