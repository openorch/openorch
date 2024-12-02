/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package registryservice

import (
	"context"

	client "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	registrytypes "github.com/singulatron/superplatform/server/internal/services/registry/types"
	usertypes "github.com/singulatron/superplatform/server/internal/services/user/types"
)

func app(permSlices ...[]usertypes.Permission) []usertypes.Permission {
	ret := []usertypes.Permission{}
	for _, ps := range permSlices {
		ret = append(ret, ps...)
	}
	return ret
}

func (ns *RegistryService) registerPermissions() error {
	ctx := context.Background()
	userSvc := ns.clientFactory.Client(sdk.WithToken(ns.token)).UserSvcAPI

	for _, permission := range app(
		registrytypes.NodeAdminPermissions,
		registrytypes.InstanceUserPermissions,
		registrytypes.InstanceAdminPermissions,
		registrytypes.DefinitionUserPermissions,
		registrytypes.DefinitionAdminPermissions,
	) {
		_, _, err := userSvc.UpsertPermission(ctx, permission.Id).
			RequestBody(client.UserSvcUpserPermissionRequest{
				Permission: &client.UserSvcPermission{
					Name:        client.PtrString(permission.Name),
					Description: client.PtrString(permission.Description),
				},
			}).
			Execute()
		if err != nil {
			return err
		}
	}

	for _, role := range []*usertypes.Role{
		usertypes.RoleAdmin,
	} {
		for _, permission := range app(
			registrytypes.NodeAdminPermissions,
			registrytypes.InstanceAdminPermissions,
			registrytypes.DefinitionAdminPermissions,
		) {
			_, _, err := userSvc.AddPermissionToRole(ctx, role.Id, permission.Id).
				Execute()
			if err != nil {
				return err
			}
		}
	}

	for _, role := range []*usertypes.Role{
		usertypes.RoleUser,
	} {
		for _, permission := range app(
			registrytypes.InstanceUserPermissions,
			registrytypes.DefinitionUserPermissions,
		) {
			_, _, err := userSvc.AddPermissionToRole(ctx, role.Id, permission.Id).
				Execute()
			if err != nil {
				return err
			}
		}
	}

	return nil
}
