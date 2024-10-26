package test

import (
	"context"
	"fmt"

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/router"
	"go.uber.org/mock/gomock"
)

func Client(url string) *openapi.APIClient {
	cli := openapi.NewAPIClient(&openapi.Configuration{
		Servers: openapi.ServerConfigurations{
			{
				URL:         url,
				Description: "Default server",
			},
		},
	})

	return cli
}

func AdminClient(url string) (*openapi.APIClient, string, error) {
	cli := openapi.NewAPIClient(&openapi.Configuration{
		Servers: openapi.ServerConfigurations{
			{
				URL:         url,
				Description: "Default server",
			},
		},
	})
	userSvc := cli.UserSvcAPI

	adminLoginRsp, _, err := userSvc.Login(context.Background()).Request(openapi.UserSvcLoginRequest{
		Slug:     openapi.PtrString("singulatron"),
		Password: openapi.PtrString("changeme"),
	}).Execute()
	if err != nil {
		return nil, "", err
	}

	adminClient := openapi.NewAPIClient(&openapi.Configuration{
		Servers: openapi.ServerConfigurations{
			{
				URL:         url,
				Description: "Default server",
			},
		},
		DefaultHeader: map[string]string{
			"Authorization": "Bearer " + *adminLoginRsp.Token.Token,
		},
	})

	return adminClient, *adminLoginRsp.Token.Token, nil
}

func MakeClients(router *router.Router, num int) ([]*openapi.APIClient, error) {
	var ret []*openapi.APIClient

	for i := 0; i < num; i++ {
		slug := fmt.Sprintf("test-user-slug-%v", i)
		password := fmt.Sprintf("testUserPassword%v", i)
		username := fmt.Sprintf("Test User Name %v", i)

		token, err := sdk.RegisterUser(router, slug, password, username)
		if err != nil {
			return nil, err
		}

		c := openapi.NewAPIClient(&openapi.Configuration{
			Servers: openapi.ServerConfigurations{
				{
					URL:         router.Address(),
					Description: "Default server",
				},
			},
			DefaultHeader: map[string]string{
				"Authorization": "Bearer " + token,
			},
		})

		ret = append(ret, c)
	}

	return ret, nil
}

// Returns a mock User Svc with expects set up for calls that happen during the startup of the services.
func MockUserSvc(ctx context.Context, ctrl *gomock.Controller) *openapi.MockUserSvcAPI {
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
	}

	mockUserSvc.EXPECT().Login(ctx).Return(mockLoginRequest)
	mockUserSvc.EXPECT().LoginExecute(gomock.Any()).Return(expectedUserSvcLoginResponse, nil, nil)
	mockUserSvc.EXPECT().UpsertPermission(ctx, gomock.Any()).Return(mockUpsertPermissionRequest).AnyTimes()
	mockUserSvc.EXPECT().UpsertPermissionExecute(gomock.Any()).Return(expectedUserSvcUpsertPermissionResponse, nil, nil).AnyTimes()
	mockUserSvc.EXPECT().AddPermissionToRole(ctx, gomock.Any(), gomock.Any()).Return(mockAddPermissionToRoleRequest).AnyTimes()
	mockUserSvc.EXPECT().AddPermissionToRoleExecute(gomock.Any()).Return(expectedUserSvcAddPermissionToRoleResponse, nil, nil).AnyTimes()
	mockUserSvc.EXPECT().IsAuthorized(ctx, gomock.Any()).Return(mockIsAuthorizedRequest).AnyTimes()
	mockUserSvc.EXPECT().IsAuthorizedExecute(gomock.Any()).Return(expectedUserSvcIsAuthorizedResponse, nil, nil).AnyTimes()

	return mockUserSvc
}
