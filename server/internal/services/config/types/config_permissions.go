/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package config_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionConfigCreate = usertypes.Permission{
	Id:   "config-svc:config:create",
	Name: "Config Svc - Config Create",
}

// There is no view permission as configs are public facing, can be read without login even

var PermissionConfigEdit = usertypes.Permission{
	Id:   "config-svc:config:edit",
	Name: "Config Svc - Config Edit",
}

var PermissionConfigDelete = usertypes.Permission{
	Id:   "config-svc:config:delete",
	Name: "Config Svc - Delete",
}

var PermissionConfigStream = usertypes.Permission{
	Id:   "config-svc:config:stream",
	Name: "Config Svc - Config Stream",
}

var AdminPermissions = []usertypes.Permission{
	PermissionConfigCreate,
	PermissionConfigEdit,
	PermissionConfigDelete,
	PermissionConfigStream,
}
