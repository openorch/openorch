/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This email code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package email_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionSendEmail = usertypes.Permission{
	Id:   "email-svc:repo:checkout",
	Name: "Email Svc - Repo Checkout",
}

var AdminPermissions = []usertypes.Permission{
	PermissionSendEmail,
}
