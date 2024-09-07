/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package stable_diffusion

import (
	"encoding/json"
	"testing"

	"github.com/stretchr/testify/require"
)

const exampleResponse = `
{
	"data": [
	  [
		{
		  "name": "/tmp/tmpj74v2rly/tmpr1li4qkz.png",
		  "data": null,
		  "is_file": true
		}
	  ],
	  {
		"headers": ["Prompt History"],
		"data": [
		  ["older prompt 1"],
		  ["older prompt 2"]
		]
	  }
	],
	"is_generating": false,
	"duration": 23.146581172943115,
	"average_duration": 19.378071202172173
}
`

func TestResponseUnmarshal(t *testing.T) {
	x := map[string]any{}
	err := json.Unmarshal([]byte(exampleResponse), &x)
	require.NoError(t, err)

	rsp := PredictResponse{}
	err = json.Unmarshal([]byte(exampleResponse), &rsp)
	require.NoError(t, err)

	require.Equal(t, 2, len(rsp.Data), rsp.Data)
	require.Equal(t, "/tmp/tmpj74v2rly/tmpr1li4qkz.png", rsp.Data[0].FileData[0].Name)
}
