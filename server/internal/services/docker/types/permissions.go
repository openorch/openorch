/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package docker_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionContainerCreate = usertypes.Permission{
	Id:   "docker-svc:container:create",
	Name: "Docker Svc - Container Create",
}

var PermissionContainerView = usertypes.Permission{
	Id:   "docker-svc:container:view",
	Name: "Docker Svc - Container View",
}

var PermissionContainerEdit = usertypes.Permission{
	Id:   "docker-svc:container:edit",
	Name: "Docker Svc - Container Edit",
}

var PermissionContainerStop = usertypes.Permission{
	Id:   "docker-svc:container:stop",
	Name: "Docker Svc - Container Stop",
}

var PermissionImageBuild = usertypes.Permission{
	Id:   "docker-svc:image:build",
	Name: "Docker Svc - Image Build",
}

var DockerPermissions = []usertypes.Permission{
	PermissionContainerView,
	PermissionContainerEdit,
	PermissionContainerStop,
	PermissionImageBuild,
}
