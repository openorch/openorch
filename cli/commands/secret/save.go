package secret

import (
	"github.com/openorch/openorch/cli/config"
	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/pkg/errors"
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
		Body(openapi.SecretSvcWriteSecretRequest{
			Secrets: []openapi.SecretSvcSecret{secret},
		}).
		Execute()
	if err != nil {
		return errors.Wrap(err, "failed to save service secret")
	}

	return nil
}
