package secret

import (
	"github.com/pkg/errors"
	"github.com/singulatron/superplatform/cli/config"
	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/spf13/cobra"
)

// Save [key] [value]
func Save(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()

	key := args[0]
	value := args[1]

	secret := openapi.SecretSvcSecret{
		Key:   openapi.PtrString(key),
		Value: openapi.PtrString(value),
	}

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return errors.Wrap(err, "cannot get env url")
	}

	cf := sdk.NewApiClientFactory(url)

	_, _, err = cf.Client(sdk.WithToken(token)).
		SecretSvcAPI.WriteSecret(ctx).
		Request(openapi.SecretSvcWriteSecretRequest{
			Secrets: []openapi.SecretSvcSecret{secret},
		}).
		Execute()
	if err != nil {
		return errors.Wrap(err, "failed to save service secret")
	}

	return nil
}
