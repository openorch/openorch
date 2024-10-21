package deployment

import (
	"fmt"
	"os"
	"text/tabwriter"

	"github.com/singulatron/superplatform/cli/config"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/spf13/cobra"
)

// List
func List(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return fmt.Errorf("Cannot get env url: '%v'", err)
	}

	cf := sdk.NewApiClientFactory(url)

	rsp, _, err := cf.Client(sdk.WithToken(token)).DeploySvcAPI.ListDeployments(ctx).Execute()
	if err != nil {
		fmt.Errorf("Failed to save service deployment: '%v'", err)
	}

	writer := tabwriter.NewWriter(os.Stdout, 0, 0, 3, ' ', 0)
	defer writer.Flush()

	fmt.Fprintln(writer, "ID\tDEFINITION ID")

	for _, deployment := range rsp.Deployments {
		fmt.Fprintf(writer, "%s\t%s\n", deployment.Id, deployment.DefinitionId)
	}

	return nil
}
