package definition

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

	rsp, _, err := cf.Client(sdk.WithToken(token)).RegistrySvcAPI.ListDefinitions(ctx).Execute()
	if err != nil {
		fmt.Errorf("Failed to save service definition: '%v'", err)
	}

	writer := tabwriter.NewWriter(os.Stdout, 0, 0, 3, ' ', 0)
	defer writer.Flush()

	fmt.Fprintln(writer, "ID\tIMAGE NAME")

	for _, definition := range rsp.Definitions {
		fmt.Fprintf(writer, "%s\t%s\n", definition.Id, definition.Image.Name)
	}

	return nil
}
