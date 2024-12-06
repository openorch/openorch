/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package download_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionDownloadCreate = usertypes.Permission{
	Id:   "download-svc:download:create",
	Name: "Download Svc - Download Create",
}

var PermissionDownloadView = usertypes.Permission{
	Id:   "download-svc:download:view",
	Name: "Download Svc - Download View",
}

var PermissionDownloadEdit = usertypes.Permission{
	Id:   "download-svc:download:edit",
	Name: "Download Svc - Download Edit",
}

var PermissionDownloadDelete = usertypes.Permission{
	Id:   "download-svc:download:delete",
	Name: "Download Svc - Download Delete",
}

var DownloadPermissions = []usertypes.Permission{
	PermissionDownloadCreate,
	PermissionDownloadView,
	PermissionDownloadEdit,
	PermissionDownloadDelete,
}
