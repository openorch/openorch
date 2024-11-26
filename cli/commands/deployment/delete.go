package deployment

import (
	"fmt"

	"github.com/singulatron/superplatform/cli/config"
	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/spf13/cobra"
)

func Delete(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()
	serviceDefinitionId := args[0]

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return fmt.Errorf("Cannot get env url: '%v'", err)
	}

	cf := sdk.NewApiClientFactory(url)

	_, _, err = cf.Client(sdk.WithToken(token)).
		DeploySvcAPI.DeleteDeployment(ctx).
		Body(openapi.DeploySvcDeleteDeploymentRequest{
			DeploymentId: serviceDefinitionId,
		}).
		Execute()
	if err != nil {
		return fmt.Errorf("Error deleting service deployment: '%v'", err)
	}

	return nil
}
