package secret

import (
	"fmt"
	"os"
	"strings"
	"text/tabwriter"

	"github.com/openorch/openorch/cli/config"
	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/spf13/cobra"
)

// List
func List(cmd *cobra.Command, args []string, show bool) error {
	ctx := cmd.Context()

	var key string
	if len(args) > 0 {
		key = args[0]
	}

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return fmt.Errorf("Cannot get env url: '%v'", err)
	}

	cf := sdk.NewApiClientFactory(url)

	rsp, _, err := cf.Client(sdk.WithToken(token)).
		SecretSvcAPI.ListSecrets(ctx).
		Body(openapi.SecretSvcListSecretsRequest{
			Key: openapi.PtrString(key),
		}).
		Execute()
	if err != nil {
		return fmt.Errorf("Failed to list secrets: '%v'", err)
	}

	writer := tabwriter.NewWriter(os.Stdout, 0, 0, 3, ' ', 0)
	defer writer.Flush()

	fmt.Fprintln(
		writer,
		"ID\tKEY\tLENGTH\tVALUE",
	)

	for _, secret := range rsp.Secrets {
		length := len(*secret.Value)

		value := strings.Repeat("*", length)
		if show {
			value = *secret.Value
		}

		fmt.Fprintf(
			writer,
			"%s\t%s\t%d\t%s\n",
			*secret.Id,
			*secret.Key,
			length,
			value,
		)
	}

	return nil
}
