/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package usertypes

import "time"

type Permission struct {
	// eg. "user.viewer"
	Id        string    `json:"id,omitempty"`
	CreatedAt time.Time `json:"createdAt,omitempty"`
	UpdatedAt time.Time `json:"updatedAt,omitempty"`

	// eg. "User Viewer"
	Name        string `json:"name,omitempty"`
	Description string `json:"description,omitempty"`
}

func (c *Permission) GetId() string {
	return c.Id
}

func (c *Permission) GetUpdatedAt() string {
	return c.Id
}

type CreatePermissionRequest struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

type CreatePermissionResponse struct {
}

type GetPermissionsRequest struct{}

type GetPermissionsResponse struct {
	Permissions []*Permission `json:"permissions"`
}

var PermissionUserCreate = Permission{
	Id:   "user.create",
	Name: "User Create",
}

var PermissionUserView = Permission{
	Id:   "user.view",
	Name: "User View",
}

var PermissionUserEdit = Permission{
	Id:   "user.edit",
	Name: "User Edit",
}

var PermissionUserDelete = Permission{
	Id:   "user.delete",
	Name: "User Delete",
}

var PermissionUserPasswordChange = Permission{
	Id:   "user.passwordChange",
	Name: "User Password Change",
}

var PermissionRoleCreate = Permission{
	Id:   "role.create",
	Name: "Role Create",
}

var PermissionRoleView = Permission{
	Id:   "role.view",
	Name: "Role View",
}

var PermissionRoleEdit = Permission{
	Id:   "role.edit",
	Name: "Role Edit",
}

var PermissionRoleDelete = Permission{
	Id:   "role.delete",
	Name: "Role Delete",
}

var UserPermissions = []Permission{
	PermissionUserCreate,
	PermissionUserView,
	PermissionUserEdit,
	PermissionUserDelete,
	PermissionUserPasswordChange,
	PermissionRoleCreate,
	PermissionRoleEdit,
	PermissionRoleView,
	PermissionRoleDelete,
}
