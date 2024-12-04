/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package user_svc

import (
	"time"

	"github.com/openorch/openorch/sdk/go/datastore"
)

type ErrorResponse struct {
	Error string `json:"error"`
}

type GetUsersOptions struct {
	Query *datastore.Query `json:"query"`
}

type User struct {
	Id        string    `json:"id,omitempty"`
	CreatedAt time.Time `json:"createdAt,omitempty"`
	UpdatedAt time.Time `json:"updatedAt,omitempty"`

	DeletedAt *time.Time `json:"deletedAt,omitempty"`

	// Full name of the organization.
	Name string `json:"name,omitempty" example:"Jane Doe"`

	// URL-friendly unique (inside the Singularon platform) identifier for the `user`.
	Slug string `json:"slug,omitempty" example:"jane-doe"`

	// Contacts are used for login and identification purposes.
	Contacts []Contact `json:"contacts,omitempty"`

	PasswordHash string `json:"passwordHash,omitempty"`
}

type Contact struct {
	// The unique identifier, which can be a URL.
	//
	// Example values: "joe12" (singulatron username), "twitter.com/thejoe" (twitter url), "joe@joesdomain.com" (email)
	Id string `json:"id,omitempty" example:"twitter.com/thejoe"`

	CreatedAt time.Time  `json:"createdAt,omitempty"`
	UpdatedAt time.Time  `json:"updatedAt,omitempty"`
	DeletedAt *time.Time `json:"deletedAt,omitempty"`

	UserId string `json:"userId,omitempty"`

	// Platform of the contact (e.g., "email", "phone", "twitter")
	Platform string `json:"platform,omitempty" example:"twitter"`

	// Value is the platform local unique identifier.
	// Ie. while the `id` of a Twitter contact is `twitter.com/thejoe`, the value will be only `thejoe`.
	// For email and phones the `id` and the `value` will be the same.
	// This field mostly exists for display purposes.
	//
	// Example values: "joe12" (singulatron username), "thejoe" (twitter username), "joe@joesdomain.com" (email)
	Value string `json:"value,omitempty" example:"thejoe"`

	// Whether the contact is verified
	Verified bool `json:"verified,omitempty"`

	// If this is the primary contact method
	IsPrimary bool `json:"isPrimary,omitempty"`
}

type UserRoleLink struct {
	// userId:roleId
	Id string `json:"id,omitempty"`

	CreatedAt time.Time  `json:"createdAt,omitempty"`
	UpdatedAt time.Time  `json:"updatedAt,omitempty"`
	DeletedAt *time.Time `json:"deletedAt,omitempty"`

	RoleId string `json:"roleId,omitempty"`
	UserId string `json:"userId,omitempty"`
}

func (u *UserRoleLink) GetId() string {
	return u.Id
}

type OrganizationUserLink struct {
	// organizationId:userId
	Id string `json:"id,omitempty"`

	CreatedAt time.Time  `json:"createdAt,omitempty"`
	UpdatedAt time.Time  `json:"updatedAt,omitempty"`
	DeletedAt *time.Time `json:"deletedAt,omitempty"`

	OrganizationId string `json:"organizationId,omitempty"`
	UserId         string `json:"userId,omitempty"`

	// Active/default organization for a user.
	// There can only be one per user.
	Active bool `json:"active,omitempty"`
}

func (o *OrganizationUserLink) GetId() string {
	return o.Id
}

type Organization struct {
	Id        string     `json:"id,omitempty"`
	CreatedAt time.Time  `json:"createdAt,omitempty"`
	UpdatedAt time.Time  `json:"updatedAt,omitempty"`
	DeletedAt *time.Time `json:"deletedAt,omitempty"`

	// Full name of the organization
	Name string `json:"name,omitempty" example:"Acme Corporation"`

	// URL-friendly unique (inside the Singularon platform) identifier for the `organization`.
	Slug string `json:"slug,omitempty" example:"acme-corporation"`
}

func (o *Organization) GetId() string {
	return o.Id
}

type ContactPlatform string

const (
	ContactPlatformEmail    ContactPlatform = "email"
	ContactPlatformPhone    ContactPlatform = "phone"
	ContactPlatformTwitter  ContactPlatform = "twitter"
	ContactPlatformLinkedIn ContactPlatform = "linkedin"
)

type KeyPair struct {
	Id        string    `json:"id,omitempty"`
	CreatedAt time.Time `json:"createdAt,omitempty"`
	UpdatedAt time.Time `json:"updatedAt,omitempty"`

	PrivateKey string `json:"privateKey,omitempty"`
	PublicKey  string `json:"publicKey,omitempty"`
}

func (k *KeyPair) GetId() string {
	return k.Id
}

func (c *User) GetId() string {
	return c.Id
}

func (c *User) GetUpdatedAt() string {
	return c.Id
}

type ReadUserByTokenRequest struct{}

type ReadUserByTokenResponse struct {
	User                 *User           `json:"user,omitempty"`
	Organizations        []*Organization `json:"organizations,omitempty"`
	ActiveOrganizationId string          `json:"activeOrganizationId,omitempty"`
}

type RegisterRequest struct {
	Name     string  `json:"name,omitempty"`
	Slug     string  `json:"slug,omitempty"`
	Contact  Contact `json:"contact,omitempty"`
	Password string  `json:"password,omitempty"`
}

type RegisterResponse struct {
	Token *AuthToken `json:"token,omitempty"`
}

type LoginRequest struct {
	Slug     string `json:"slug,omitempty"`
	Contact  string `json:"contact,omitempty"`
	Password string `json:"password"`
}

type LoginResponse struct {
	Token *AuthToken `json:"token,omitempty"`
}

type SaveProfileRequest struct {
	Slug string `json:"slug,omitempty"`
	Name string `json:"name,omitempty"`
}

type SaveProfileResponse struct {
}

type ChangePasswordRequest struct {
	Slug            string `json:"slug,omitempty"`
	CurrentPassword string `json:"currentPassword,omitempty"`
	NewPassword     string `json:"newPassword,omitempty"`
}

type ChangePasswordResponse struct{}

type ChangePasswordAdminRequest struct {
	Slug        string `json:"slug,omitempty"`
	NewPassword string `json:"newPassword,omitempty"`
}

type ChangePasswordAdminResponse struct{}

type GetUsersRequest struct {
	Query *datastore.Query `json:"query"`
}

type GetUsersResponse struct {
	Users []*User   `json:"users,omitempty"`
	After time.Time `json:"after,omitempty"`
	Count int64     `json:"count"`
}

type CreateUserRequest struct {
	User     *User    `json:"user,omitempty"`
	Password string   `json:"password,omitempty"`
	RoleIds  []string `json:"roleIds,omitempty"`
}

type CreateUserResponse struct {
}

type DeleteUserRequest struct {
	UserId string `json:"userId,omitempty"`
}

type DeleteUserResponse struct{}

type GetPublicKeyRequest struct{}
type GetPublicKeyResponse struct {
	PublicKey string `json:"publicKey,omitempty"`
}

type CreateOrganizationRequest struct {
	Id string `json:"id,omitempty"`

	// Full name of the organization.
	Name string `json:"name,omitempty"`

	// URL-friendly unique (inside the Singularon platform) identifier for the `organization`.
	Slug string `json:"slug,omitempty"`
}

type CreateOrganizationResponse struct{}

type AddUserToOrganizationRequest struct {
	UserId string `json:"userId,omitempty"`
}

type AddUserToOrganizationResponse struct {
}

type RemoveUserFromOrganizationRequest struct {
}

type RemoveUserFromOrganizationResponse struct {
}
