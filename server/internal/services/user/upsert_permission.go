/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package userservice

import (
	"fmt"

	"github.com/openorch/openorch/sdk/go/datastore"
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

func (s *UserService) upsertPermission(
	userId, id, name, description string,
) (*usertypes.Permission, error) {
	query := s.permissionsStore.Query(
		datastore.Equals(datastore.Field("id"), id),
	)

	permI, found, err := query.FindOne()
	if err != nil {
		return nil, err
	}

	if found {
		perm := permI.(*usertypes.Permission)
		if perm.OwnerId != userId {
			return nil, fmt.Errorf("cannot update unowned permission")
		}

		perm.Name = name
		perm.Description = description
		query.Update(perm)
		return perm, nil
	}

	permission := &usertypes.Permission{
		Id:          id,
		Name:        name,
		Description: description,
		OwnerId:     userId,
	}

	s.permissionsStore.Create(permission)

	return permission, nil
}
