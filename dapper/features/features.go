/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package features

import dt "github.com/singulatron/singulatron/dapper/types"

var Features = []dt.Feature{
	WslUpdated,
	WslInstalled,
	WslEnabled,
	VirtualMachinePlatformFeature,
	DockerDaemonInstalled,
	UserInGroup,
	DockerDaemonRunning,
	GroupExists,
	WSLTarLoaded,
	WslSetDefaultVersion,
	FileDownloaded,
}
