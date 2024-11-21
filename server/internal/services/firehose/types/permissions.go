/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package firehose_svc

import (
	usertypes "github.com/singulatron/superplatform/server/internal/services/user/types"
)

var PermissionEventPublish = usertypes.Permission{
	Id:   "firehose-svc:event:publish",
	Name: "Firehose Svc - Event Publish",
}

var PermissionFirehoseStream = usertypes.Permission{
	Id:   "firehose-svc:event:stream",
	Name: "Firehose Svc - Event Stream",
}

var FirehosePermissions = []usertypes.Permission{
	PermissionEventPublish,
	PermissionFirehoseStream,
}
