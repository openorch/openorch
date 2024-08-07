/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package user_svc

import "time"

type Permission struct {
	// eg. "user.viewer"
	Id        string    `json:"id,omitempty"`
	CreatedAt time.Time `json:"createdAt,omitempty"`
	UpdatedAt time.Time `json:"updatedAt,omitempty"`

	// eg. "User Viewer"
	Name        string `json:"name,omitempty"`
	Description string `json:"description,omitempty"`

	// Service who owns the permission
	OwnerId string `json:"ownerId,omitempty"`
}

func (c *Permission) GetId() string {
	return c.Id
}

func (c *Permission) GetUpdatedAt() string {
	return c.Id
}

type IsAuthorizedRequest struct {
	EmailsGranted []string `json:"emailsGranted,omitempty"`
}

type IsAuthorizedResponse struct {
	Authorized bool  `json:"authorized,omitempty"`
	User       *User `json:"user,omitempty"`
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

type UpserPermissionRequest struct {
	Permission *Permission `json:"permission"`
}

type UpserPermissionResponse struct {
}

type AddPermissionToRoleRequest struct {
	RoleId       string `json:"roleId"`
	PermissionId string `json:"permissionId"`
}

type AddPermissionToRoleResponse struct{}

var PermissionUserCreate = Permission{
	Id:   "user-svc:user:create",
	Name: "User Service - User Create",
}

var PermissionUserView = Permission{
	Id:   "user-svc:user:view",
	Name: "User Service - User View",
}

var PermissionUserEdit = Permission{
	Id:   "user-svc:user:edit",
	Name: "User Service - User Edit",
}

var PermissionUserDelete = Permission{
	Id:   "user-svc:user:delete",
	Name: "User Service - User Delete",
}

var PermissionUserPasswordChange = Permission{
	Id:   "user-svc:user:passwordChange",
	Name: "User Service - User Password Change",
}

var PermissionRoleCreate = Permission{
	Id:   "user-svc:role:create",
	Name: "User Service - Role Create",
}

var PermissionRoleView = Permission{
	Id:   "user-svc:role:view",
	Name: "User Service - Role View",
}

var PermissionRoleEdit = Permission{
	Id:   "user-svc:role:edit",
	Name: "User Service - Role Edit",
}

var PermissionRoleDelete = Permission{
	Id:   "user-svc:role:delete",
	Name: "User Service - Role Delete",
}

var PermissionPermissionCreate = Permission{
	Id:   "user-svc:permission:create",
	Name: "User Service - Permission Create",
}

var PermissionPermissionEdit = Permission{
	Id:   "user-svc:permission:edit",
	Name: "User Service - Permission Edit",
}

var PermissionPermissionAssign = Permission{
	Id:   "user-svc:permission:assign",
	Name: "User Service - Permission Assign",
}

var UserPermissions = []Permission{
	PermissionPermissionCreate,
	PermissionPermissionEdit,
	PermissionPermissionAssign,
}

var AdminPermissions = []Permission{
	PermissionUserCreate,
	PermissionUserView,
	PermissionUserEdit,
	PermissionUserDelete,
	PermissionUserPasswordChange,
	PermissionRoleCreate,
	PermissionRoleEdit,
	PermissionRoleView,
	PermissionRoleDelete,
	PermissionPermissionCreate,
	PermissionPermissionEdit,
	PermissionPermissionAssign,
}
