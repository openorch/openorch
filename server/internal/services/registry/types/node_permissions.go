/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package registry_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionNodeCreate = usertypes.Permission{
	Id:   "registry-svc:node:create",
	Name: "Registry Svc - Node Create",
}

var PermissionNodeView = usertypes.Permission{
	Id:   "registry-svc:node:view",
	Name: "Registry Svc - Node View",
}

var PermissionNodeEdit = usertypes.Permission{
	Id:   "registry-svc:node:edit",
	Name: "Registry Svc - Node Edit",
}

var PermissionNodeDelete = usertypes.Permission{
	Id:   "registry-svc:node:delete",
	Name: "Registry Svc - Node Delete",
}

var PermissionNodeStream = usertypes.Permission{
	Id:   "registry-svc:node:stream",
	Name: "Registry Svc - Node Stream",
}

var NodeAdminPermissions = []usertypes.Permission{
	PermissionNodeCreate,
	PermissionNodeView,
	PermissionNodeEdit,
	PermissionNodeDelete,
	PermissionNodeStream,
}
