package deployservice_test

import (
	"context"
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
	ctx := context.Background()

	mockUserSvc := openapi.NewMockUserSvcAPI(ctrl)
	mockClientFactory := sdk.NewMockClientFactory(ctrl)

	expectedUserSvcLoginResponse := &openapi.UserSvcLoginResponse{
		Token: &openapi.UserSvcAuthToken{
			Token: openapi.PtrString("HELLO"),
		},
	}
	mockLoginRequest := openapi.ApiLoginRequest{
		ApiService: mockUserSvc,
	}
	mockAddPermissionToRoleRequest := openapi.ApiAddPermissionToRoleRequest{
		ApiService: mockUserSvc,
	}
	expectedUserSvcAddPermissionToRoleResponse := map[string]interface{}{}
	expectedUserSvcUpsertPermissionResponse := map[string]interface{}{}
	mockUpsertPermissionRequest := openapi.ApiUpsertPermissionRequest{
		ApiService: mockUserSvc,
	}

	mockUserSvc.EXPECT().Login(ctx).Return(mockLoginRequest)
	mockUserSvc.EXPECT().LoginExecute(gomock.Any()).Return(expectedUserSvcLoginResponse, nil, nil)
	mockUserSvc.EXPECT().UpsertPermission(ctx, gomock.Any()).Return(mockUpsertPermissionRequest).AnyTimes()
	mockUserSvc.EXPECT().UpsertPermissionExecute(gomock.Any()).Return(expectedUserSvcUpsertPermissionResponse, nil, nil).AnyTimes()
	mockUserSvc.EXPECT().AddPermissionToRole(ctx, gomock.Any(), gomock.Any()).Return(mockAddPermissionToRoleRequest).AnyTimes()
	mockUserSvc.EXPECT().AddPermissionToRoleExecute(gomock.Any()).Return(expectedUserSvcAddPermissionToRoleResponse, nil, nil).AnyTimes()
	mockClientFactory.EXPECT().Client(gomock.Any()).Return(&openapi.APIClient{
		UserSvcAPI: mockUserSvc,
	}).AnyTimes()

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
