/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package secret_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionSecretList = usertypes.Permission{
	Id:   "secret-svc:secret:list",
	Name: "Secret Svc - Secret List",
}

var PermissionSecretSave = usertypes.Permission{
	Id:   "secret-svc:secret:save",
	Name: "Secret Svc - Secret Save",
}

var PermissionSecretRemove = usertypes.Permission{
	Id:   "secret-svc:secret:remove",
	Name: "Secret Svc - Secret Remove",
}

var Permissions = []usertypes.Permission{
	PermissionSecretList,
	PermissionSecretSave,
	PermissionSecretRemove,
}
