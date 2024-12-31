package secret

import (
	"fmt"

	"github.com/openorch/openorch/cli/oo/config"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/spf13/cobra"
)

// IsSecure
func IsSecure(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return fmt.Errorf("Cannot get env url: '%v'", err)
	}

	cf := sdk.NewApiClientFactory(url)

	rsp, _, err := cf.Client(sdk.WithToken(token)).
		SecretSvcAPI.IsSecure(ctx).
		Execute()
	if err != nil {
		return fmt.Errorf("Failed to list secrets: '%v'", err)
	}

	fmt.Print(*rsp.IsSecure)

	return nil
}
