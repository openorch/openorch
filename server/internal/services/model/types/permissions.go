/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package model_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionModelCreate = usertypes.Permission{
	Id:   "model-svc:model:create",
	Name: "Model Svc - Model Create",
}

var PermissionModelView = usertypes.Permission{
	Id:   "model-svc:model:view",
	Name: "Model Svc - Model View",
}

var PermissionModelEdit = usertypes.Permission{
	Id:   "model-svc:model:edit",
	Name: "Model Svc - Model Edit",
}

var PermissionModelDelete = usertypes.Permission{
	Id:   "model-svc:model:delete",
	Name: "Model Svc - Model Delete",
}

var PermissionModelStream = usertypes.Permission{
	Id:   "model-svc:model:stream",
	Name: "Model Svc - Model Stream",
}

var ModelAdminPermissions = []usertypes.Permission{
	PermissionModelCreate,
	PermissionModelView,
	PermissionModelEdit,
	PermissionModelDelete,
	PermissionModelStream,
}
