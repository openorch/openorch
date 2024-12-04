/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package prompt_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionPromptCreate = usertypes.Permission{
	Id:   "prompt-svc:prompt:create",
	Name: "Prompt Svc - Prompt Create",
}

var PermissionPromptView = usertypes.Permission{
	Id:   "prompt-svc:prompt:view",
	Name: "Prompt Svc - Prompt View",
}

var PermissionPromptEdit = usertypes.Permission{
	Id:   "prompt-svc:prompt:edit",
	Name: "Prompt Svc - Prompt Edit",
}

var PermissionPromptDelete = usertypes.Permission{
	Id:   "prompt-svc:prompt:delete",
	Name: "Prompt Svc - Prompt Delete",
}

var PermissionPromptStream = usertypes.Permission{
	Id:   "prompt-svc:prompt:stream",
	Name: "Prompt Svc - Prompt Stream",
}

var PromptPermissions = []usertypes.Permission{
	PermissionPromptCreate,
	PermissionPromptView,
	PermissionPromptEdit,
	PermissionPromptDelete,
	PermissionPromptStream,
}
