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
package features

import dt "github.com/singulatron/singulatron/localtron/dapper/types"

var WslUpdated = dt.Feature{
	ID:   "wsl-updated",
	Name: "WSL Updated",
	Arguments: []dt.Argument{
		{
			Name:    "wslVersion",
			Type:    dt.Int,
			Default: 2,
		},
	},
	PlatformScripts: map[dt.Platform]*dt.Scripts{
		dt.Windows: {
			Execute: &dt.Script{
				Source: `
Write-Host "Updating WSL kernel"
wsl --update
`,
				Runtime: "powershell",
			},
			Check: &dt.Script{
				Source: `
$wslVersion = wsl --status
if ($wslVersion.Contains("Default Version: {{.wslVersion}}")) {
    exit 0
} else {
    exit 1
}`,
				Runtime: "powershell",
			},
		},
	},
	PlatformFeatures: map[dt.Platform][]any{
		dt.Windows: {WslInstalled.ID},
	},
}
