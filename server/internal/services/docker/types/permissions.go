/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package docker_svc

import (
	openapi "github.com/openorch/openorch/clients/go"
)

var PermissionContainerCreate = openapi.UserSvcPermission{
	Id:   openapi.PtrString("docker-svc:container:create"),
	Name: openapi.PtrString("Docker Svc - Container Create"),
}

var PermissionContainerView = openapi.UserSvcPermission{
	Id:   openapi.PtrString("docker-svc:container:view"),
	Name: openapi.PtrString("Docker Svc - Container View"),
}

var PermissionContainerEdit = openapi.UserSvcPermission{
	Id:   openapi.PtrString("docker-svc:container:edit"),
	Name: openapi.PtrString("Docker Svc - Container Edit"),
}

var PermissionContainerStop = openapi.UserSvcPermission{
	Id:   openapi.PtrString("docker-svc:container:stop"),
	Name: openapi.PtrString("Docker Svc - Container Stop"),
}

var PermissionImageBuild = openapi.UserSvcPermission{
	Id:   openapi.PtrString("docker-svc:image:build"),
	Name: openapi.PtrString("Docker Svc - Image Build"),
}

var AdminPermissions = []openapi.UserSvcPermission{
	PermissionContainerView,
	PermissionContainerEdit,
	PermissionContainerStop,
	PermissionImageBuild,
}
