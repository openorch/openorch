package test

import (
	"context"
	"fmt"

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"go.uber.org/mock/gomock"
)

func AdminClient(clientFactory sdk.ClientFactory) (*openapi.APIClient, string, error) {
	userSvc := clientFactory.Client().UserSvcAPI

	adminLoginRsp, _, err := userSvc.Login(context.Background()).Request(openapi.UserSvcLoginRequest{
		Slug:     openapi.PtrString("singulatron"),
		Password: openapi.PtrString("changeme"),
	}).Execute()
	if err != nil {
		return nil, "", err
	}

	return clientFactory.Client(sdk.WithToken(*adminLoginRsp.Token.Token)), *adminLoginRsp.Token.Token, nil
}

func MakeClients(clientFactory sdk.ClientFactory, num int) ([]*openapi.APIClient, error) {
	var ret []*openapi.APIClient

	for i := 0; i < num; i++ {
		slug := fmt.Sprintf("test-user-slug-%v", i)
		password := fmt.Sprintf("testUserPassword%v", i)
		username := fmt.Sprintf("Test User Name %v", i)

		token, err := sdk.RegisterUser(clientFactory.Client().UserSvcAPI, slug, password, username)
		if err != nil {
			return nil, err
		}

		c := clientFactory.Client(sdk.WithToken(token))

		ret = append(ret, c)
	}

	return ret, nil
}

type MockUserOptions struct {
	Slug string
}

type MockUserOption func(*MockUserOptions)

func WithSlug(slug string) MockUserOption {
	return func(o *MockUserOptions) {
		o.Slug = slug
	}
}

// Returns a mock User Svc with expects set up for calls that happen during the startup of the services.
func MockUserSvc(ctx context.Context, ctrl *gomock.Controller, options ...MockUserOption) *openapi.MockUserSvcAPI {
	opts := &MockUserOptions{}
	for _, o := range options {
		o(opts)
	}

	mockUserSvc := openapi.NewMockUserSvcAPI(ctrl)

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

	mockIsAuthorizedRequest := openapi.ApiIsAuthorizedRequest{
		ApiService: mockUserSvc,
	}
	expectedUserSvcIsAuthorizedResponse := &openapi.UserSvcIsAuthorizedResponse{
		Authorized: openapi.PtrBool(true),
		User: &openapi.UserSvcUser{
			Id:   openapi.PtrString("user-id-1"),
			Slug: &opts.Slug,
		},
	}

	mockUserSvc.EXPECT().GetPublicKey(ctx).Return(openapi.ApiGetPublicKeyRequest{
		ApiService: mockUserSvc,
	}).AnyTimes()
	mockUserSvc.EXPECT().GetPublicKeyExecute(gomock.Any()).Return(&openapi.UserSvcGetPublicKeyResponse{
		PublicKey: openapi.PtrString(""),
	}, nil, nil).AnyTimes()
	mockUserSvc.EXPECT().Login(ctx).Return(mockLoginRequest).AnyTimes()
	mockUserSvc.EXPECT().LoginExecute(gomock.Any()).Return(expectedUserSvcLoginResponse, nil, nil).AnyTimes()
	mockUserSvc.EXPECT().UpsertPermission(ctx, gomock.Any()).Return(mockUpsertPermissionRequest).AnyTimes()
	mockUserSvc.EXPECT().UpsertPermissionExecute(gomock.Any()).Return(expectedUserSvcUpsertPermissionResponse, nil, nil).AnyTimes()
	mockUserSvc.EXPECT().AddPermissionToRole(ctx, gomock.Any(), gomock.Any()).Return(mockAddPermissionToRoleRequest).AnyTimes()
	mockUserSvc.EXPECT().AddPermissionToRoleExecute(gomock.Any()).Return(expectedUserSvcAddPermissionToRoleResponse, nil, nil).AnyTimes()
	mockUserSvc.EXPECT().IsAuthorized(gomock.Any(), gomock.Any()).Return(mockIsAuthorizedRequest).AnyTimes()
	mockUserSvc.EXPECT().IsAuthorizedExecute(gomock.Any()).Return(expectedUserSvcIsAuthorizedResponse, nil, nil).AnyTimes()

	return mockUserSvc
}
