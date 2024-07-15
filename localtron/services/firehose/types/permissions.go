/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package firehosetypes

import (
	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
)

var PermissionFirehoseCreate = usertypes.Permission{
	Id:   "firehose.create",
	Name: "Firehose Create",
}

var PermissionFirehoseView = usertypes.Permission{
	Id:   "firehose.view",
	Name: "Firehose View",
}

var PermissionFirehoseEdit = usertypes.Permission{
	Id:   "firehose.edit",
	Name: "Firehose Edit",
}

var PermissionFirehoseDelete = usertypes.Permission{
	Id:   "firehose.delete",
	Name: "Firehose Delete",
}

var PermissionFirehoseStream = usertypes.Permission{
	Id:   "firehose.stream",
	Name: "Firehose Stream",
}

var FirehosePermissions = []usertypes.Permission{
	PermissionFirehoseCreate,
	PermissionFirehoseView,
	PermissionFirehoseEdit,
	PermissionFirehoseDelete,
	PermissionFirehoseStream,
}
