/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package containerservice_test

import (
	"context"
	"net/http/httptest"
	"testing"

	openapi "github.com/openorch/openorch/clients/go"
	"github.com/openorch/openorch/sdk/go/test"
	"github.com/openorch/openorch/server/internal/di"
	"github.com/stretchr/testify/require"
)

func TestRunContainer(t *testing.T) {
	hs := &di.HandlerSwitcher{}
	server := httptest.NewServer(hs)
	defer server.Close()

	options := &di.Options{
		Test: true,
		Url:  server.URL,
	}
	universe, starterFunc, err := di.BigBang(options)
	require.NoError(t, err)

	hs.UpdateHandler(universe)

	err = starterFunc()
	require.NoError(t, err)

	adminClient, _, err := test.AdminClient(options.ClientFactory)
	require.NoError(t, err)

	ctx := context.Background()

	t.Run("run container", func(t *testing.T) {
		_, _, err = adminClient.ContainerSvcAPI.RunContainer(ctx).Body(openapi.ContainerSvcRunContainerRequest{
			Image:    "nginx:latest",
			Port:     8080,
			HostPort: openapi.PtrInt32(8081),
			Options: &openapi.ContainerSvcRunContainerOptions{
				Name:   openapi.PtrString("test-container"),
				Hash:   openapi.PtrString("abc123"),
				Envs:   []string{"ENV_VAR=value"},
				Labels: &map[string]string{"app": "test"},
				Keeps:  []string{"/data"},
				// Assets: &map[string]string{"MODEL": "https://example.com/model.gguf"},
			},
		}).Execute()
		require.NoError(t, err)
	})
}
