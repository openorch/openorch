/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package file_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionDownloadCreate = usertypes.Permission{
	Id:   "file-svc:download:create",
	Name: "File Svc - Download Create",
}

var PermissionDownloadView = usertypes.Permission{
	Id:   "file-svc:download:view",
	Name: "File Svc - Download View",
}

var PermissionDownloadEdit = usertypes.Permission{
	Id:   "file-svc:download:edit",
	Name: "File Svc - Download Edit",
}

var PermissionDownloadDelete = usertypes.Permission{
	Id:   "file-svc:download:delete",
	Name: "File Svc - Download Delete",
}

var PermissionUploadCreate = usertypes.Permission{
	Id:   "file-svc:upload:create",
	Name: "File Svc - Upload Create",
}

var PermissionUploadView = usertypes.Permission{
	Id:   "file-svc:upload:view",
	Name: "File Svc - Upload View",
}

var FileAdminPermissions = []usertypes.Permission{
	PermissionDownloadCreate,
	PermissionDownloadView,
	PermissionDownloadEdit,
	PermissionDownloadDelete,
	PermissionUploadCreate,
	PermissionUploadView,
}
