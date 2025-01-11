/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package dynamic_svc

import (
	openapi "github.com/openorch/openorch/clients/go"
)

var PermissionObjectCreate = openapi.UserSvcPermission{
	Id:   openapi.PtrString("dynamic-svc:object:create"),
	Name: openapi.PtrString("Dynamic Svc - Object Create"),
}

var PermissionObjectView = openapi.UserSvcPermission{
	Id:   openapi.PtrString("dynamic-svc:object:view"),
	Name: openapi.PtrString("Dynamic Svc - Object View"),
}

var PermissionObjectEdit = openapi.UserSvcPermission{
	Id:   openapi.PtrString("dynamic-svc:object:edit"),
	Name: openapi.PtrString("Dynamic Svc - Object Edit"),
}

var PermissionObjectDelete = openapi.UserSvcPermission{
	Id:   openapi.PtrString("dynamic-svc:object:delete"),
	Name: openapi.PtrString("Dynamic Svc - Object Delete"),
}

var PermissionObjectStream = openapi.UserSvcPermission{
	Id:   openapi.PtrString("dynamic-svc:object:stream"),
	Name: openapi.PtrString("Dynamic Svc - Object Stream"),
}

var Permissions = []openapi.UserSvcPermission{
	PermissionObjectCreate,
	PermissionObjectView,
	PermissionObjectEdit,
	PermissionObjectDelete,
	PermissionObjectStream,
}
