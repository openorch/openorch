package deployservice_test

import (
	"net/http/httptest"
	"testing"

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/server/internal/di"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"
)

// TestDeployLoop simulates a deployment cycle in the deploy loop.
func TestDeployLoop(t *testing.T) {
	hs := &di.HandlerSwitcher{}
	server := httptest.NewServer(hs)
	defer server.Close()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockClientFactory := sdk.NewMockClientFactory(ctrl)
	mockClientFactory.EXPECT().Client()
	mockClientFactory.EXPECT().Client().Return(&openapi.APIClient{
		UserSvcAPI: openapi.NewMockUserSvcAPI(ctrl),
	})

	options := &di.Options{
		Test:          true,
		Url:           server.URL,
		ClientFactory: mockClientFactory,
	}
	universe, starterFunc, err := di.BigBang(options)
	require.NoError(t, err)

	hs.UpdateHandler(universe)

	err = starterFunc()
	require.NoError(t, err)
}
