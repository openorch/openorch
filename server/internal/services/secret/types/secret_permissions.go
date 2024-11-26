/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package secret_svc

import (
	usertypes "github.com/singulatron/superplatform/server/internal/services/user/types"
)

var PermissionSecretRead = usertypes.Permission{
	Id:   "secret-svc:secret:read",
	Name: "Secret Svc - Secret Read",
}

var PermissionSecretWrite = usertypes.Permission{
	Id:   "secret-svc:secret:write",
	Name: "Secret Svc - Secret Write",
}

var AdminPermissions = []usertypes.Permission{
	PermissionSecretRead,
	PermissionSecretWrite,
}
