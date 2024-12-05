package login

import (
	"fmt"

	"github.com/openorch/openorch/cli/config"
	"github.com/openorch/openorch/cli/types"
	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/spf13/cobra"
)

// Login johnny myPass1
func Login(cmd *cobra.Command, args []string) error {
	conf, err := config.LoadConfig()
	if err != nil {
		return fmt.Errorf("Failed to load config: %w", err)
	}

	slug := args[0]
	password := args[1]

	if conf.Environments == nil {
		return fmt.Errorf("No environments")
	}

	env, ok := conf.Environments[conf.SelectedEnvironment]
	if !ok {
		return fmt.Errorf(
			"failed to find selected env: %s",
			conf.SelectedEnvironment,
		)
	}

	cf := sdk.NewApiClientFactory(env.URL)

	rsp, _, err := cf.Client().
		UserSvcAPI.Login(cmd.Context()).
		Body(openapi.UserSvcLoginRequest{
			Slug:     &slug,
			Password: &password,
		}).
		Execute()
	if err != nil {
		return err
	}

	token := rsp.Token.GetToken()

	if env.Users == nil {
		env.Users = map[string]*types.User{}
	}

	env.Users[slug] = &types.User{
		Slug:  slug,
		Token: token,
	}
	env.SelectedUser = slug

	conf.Environments[env.ShortName] = env

	return config.SaveConfig(conf)
}
