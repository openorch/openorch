/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package docker_svc

import (
	usertypes "github.com/singulatron/superplatform/server/internal/services/user/types"
)

var PermissionContainerCreate = usertypes.Permission{
	Id:   "docker-svc:container:create",
	Name: "Docker Service - Container Create",
}

var PermissionContainerView = usertypes.Permission{
	Id:   "docker-svc:container:view",
	Name: "Docker Service - Container View",
}

var PermissionContainerEdit = usertypes.Permission{
	Id:   "docker-svc:container:edit",
	Name: "Docker Service - Container Edit",
}

var PermissionImageBuild = usertypes.Permission{
	Id:   "docker-svc:image:build",
	Name: "Docker Service - Image Build",
}

var DockerPermissions = []usertypes.Permission{
	PermissionContainerView,
	PermissionContainerEdit,
	PermissionImageBuild,
}
