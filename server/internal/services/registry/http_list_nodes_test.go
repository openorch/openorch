//go:build dist
// +build dist

package registryservice_test

import (
	"context"
	"net/http/httptest"
	"strings"
	"testing"

	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/test"
	"github.com/openorch/openorch/server/internal/di"
	"github.com/openorch/openorch/server/internal/node"
	node_types "github.com/openorch/openorch/server/internal/node/types"
	"github.com/stretchr/testify/require"
)

func TestNodeId(t *testing.T) {
	ctx := context.Background()

	hs := &di.HandlerSwitcher{}
	server := httptest.NewServer(hs)
	defer server.Close()

	dbprefix := sdk.Id("node_id")

	opt1 := node_types.Options{
		Db:       "postgres",
		DbPrefix: dbprefix,
		Address:  server.URL,
	}
	nodeInfo1, err := node.Start(opt1)
	require.NoError(t, err)

	hs.UpdateHandler(nodeInfo1.Router)
	require.NoError(t, nodeInfo1.StarterFunc())

	adminClient, _, err := test.AdminClient(opt1.ClientFactory)
	require.NoError(t, err)

	nodesRsp, _, err := adminClient.RegistrySvcAPI.ListNodes(ctx).Execute()
	require.NoError(t, err)
	require.Equal(t, 1, len(nodesRsp.Nodes))
	require.Equal(t, nodesRsp.Nodes[0].Url, server.URL)
	require.Equal(t, true, strings.Contains(nodesRsp.Nodes[0].Id, "node_"))

	hs2 := &di.HandlerSwitcher{}
	server2 := httptest.NewServer(hs2)
	defer server2.Close()
	opt2 := node_types.Options{
		NodeId:   "abc",
		Db:       "postgres",
		DbPrefix: dbprefix,
	}
	nodeInfo2, err := node.Start(opt2)
	hs2.UpdateHandler(nodeInfo2.Router)
	require.NoError(t, nodeInfo2.StarterFunc())

	adminClient2, _, err := test.AdminClient(opt2.ClientFactory)
	require.NoError(t, err)

	nodesRsp2, _, err := adminClient2.RegistrySvcAPI.ListNodes(ctx).Execute()
	require.NoError(t, err)

	require.Equal(t, 2, len(nodesRsp2.Nodes), nodesRsp2.Nodes)
	require.Equal(t, nodesRsp2.Nodes[0].Url, server2.URL)
	require.Equal(t, "abc", nodesRsp2.Nodes[0].Id)
}
