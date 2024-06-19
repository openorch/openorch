/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */

package modelservice

import (
	modeltypes "github.com/singulatron/singulatron/localtron/services/model/types"
	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
)

func (p *ModelService) registerPermissions() error {
	for _, permission := range modeltypes.ModelPermissions {
		_, err := p.userService.UpsertPermission(
			permission.Id,
			permission.Name,
			permission.Description,
		)
		if err != nil {
			return err
		}
	}

	for _, role := range []*usertypes.Role{
		usertypes.RoleAdmin,
		usertypes.RoleUser,
	} {
		for _, permission := range modeltypes.ModelPermissions {
			p.userService.AddPermissionToRole(role.Id, permission.Id)
		}
	}

	return nil
}

func (p *ModelService) bootstrapModels() error {
	err := p.platformsStore.UpsertMany(modeltypes.Platforms)
	if err != nil {
		return err
	}
	return p.modelsStore.UpsertMany(modeltypes.Models)
}
