package instance

import (
	"fmt"
	"os"
	"text/tabwriter"
	"time"

	"github.com/openorch/openorch/cli/config"
	sdk "github.com/openorch/openorch/sdk/go"
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

	rsp, _, err := cf.Client(sdk.WithToken(token)).
		RegistrySvcAPI.ListInstances(ctx).
		Execute()
	if err != nil {
		return fmt.Errorf("Failed to save service instance: '%v'", err)
	}

	writer := tabwriter.NewWriter(os.Stdout, 0, 0, 3, ' ', 0)
	defer writer.Flush()

	fmt.Fprintln(writer, "ID\tURL\tSTATUS\tLAST HEARTBEAT")

	for _, instance := range rsp.Instances {
		heartbeat := ""
		if instance.LastHeartbeat != nil {
			heartbeat = *instance.LastHeartbeat
			parsedTime, err := time.Parse(time.RFC3339Nano, heartbeat)
			if err == nil {
				heartbeat = time.Since(parsedTime).
					Truncate(time.Second).
					String() +
					" ago"
			}
		}

		fmt.Fprintf(
			writer,
			"%s\t%s\t%s\t%s\n",
			instance.Id,
			instance.Url,
			instance.Status,
			heartbeat,
		)
	}

	return nil
}
