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
		return fmt.Errorf("Failed to list service definitions: '%v'", err)
	}

	writer := tabwriter.NewWriter(os.Stdout, 0, 0, 3, ' ', 0)
	defer writer.Flush()

	fmt.Fprintln(writer, "ID\tIMAGE NAME\tREPO URL\tREPO BUILD CONTEXT\tREPO CONTAINER FILE")

	for _, definition := range rsp.Definitions {
		imageName := ""
		if definition.Image != nil {
			imageName = definition.Image.Name
		}
		repoUrl := ""
		if definition.Repository != nil {
			repoUrl = definition.Repository.Url
		}
		buildContext := ""
		if definition.Repository != nil && definition.Repository.BuildContext != nil {
			buildContext = *definition.Repository.BuildContext
		}
		containerFile := ""
		if definition.Repository != nil && definition.Repository.ContainerFile != nil {
			containerFile = *definition.Repository.ContainerFile
		}

		fmt.Fprintf(writer, "%s\t%s\t%s\t%s\t%s\n", definition.Id, imageName, repoUrl, buildContext, containerFile)
	}

	return nil
}
