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
	"github.com/openorch/openorch/sdk/go/datastore"
)

func (s *UserService) deletePermission(permissionId string) error {
	return s.permissionsStore.Query(
		datastore.Id(permissionId),
	).Delete()
}
