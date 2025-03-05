/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package backends

import (
	container "github.com/openorch/openorch/server/internal/services/container/types"
)

type ContainerBackend interface {
	GetContainerSummary(container.GetContainerSummaryRequest) (*container.GetContainerSummaryResponse, error)
	BuildImage(container.BuildImageRequest) (*container.BuildImageResponse, error)
	ListContainers(container.ListContainersRequest) (*container.ListContainersResponse, error)
	StopContainer(container.StopContainerRequest) (*container.StopContainerResponse, error)
	ContainerIsRunning(container.ContainerIsRunningRequest) (*container.ContainerIsRunningResponse, error)
	DaemonInfo(container.DaemonInfoRequest) (*container.DaemonInfoResponse, error)
}
