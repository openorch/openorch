package secret

import (
	"fmt"
	"io/ioutil"
	"os"

	"github.com/ghodss/yaml"
	"github.com/openorch/openorch/cli/config"
	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/pkg/errors"
	"github.com/spf13/cobra"
)

// Save [key] [value] | [filePath]
func Save(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()
	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return errors.Wrap(err, "cannot get env url")
	}

	cf := sdk.NewApiClientFactory(url)

	// Determine the save type: single key-value pair or file
	if len(args) == 2 {
		// Case 1: Single key-value pair
		key := args[0]
		value := args[1]

		secret := openapi.SecretSvcSecret{
			Key:   openapi.PtrString(key),
			Value: openapi.PtrString(value),
		}

		_, _, err = cf.Client(sdk.WithToken(token)).
			SecretSvcAPI.SaveSecrets(ctx).
			Body(openapi.SecretSvcSaveSecretsRequest{
				Secrets: []openapi.SecretSvcSecret{secret},
			}).
			Execute()
		if err != nil {
			return errors.Wrap(err, "failed to save single secret")
		}

		fmt.Println("Single secret saved successfully.")
		return nil
	} else if len(args) == 1 {
		// Case 2: File-based secrets (single or multiple)
		filePath := args[0]

		if _, err := os.Stat(filePath); os.IsNotExist(err) {
			return errors.Wrap(err, fmt.Sprintf("file not found at '%v'", filePath))
		}

		data, err := ioutil.ReadFile(filePath)
		if err != nil {
			return errors.Wrap(err, fmt.Sprintf("failed to read file at '%v'", filePath))
		}

		// Determine whether the file is single or multiple secrets
		var secrets []openapi.SecretSvcSecret

		// Unmarshal as list first (multiple secrets)
		if err := yaml.Unmarshal(data, &secrets); err != nil {
			// If unmarshalling to list fails, attempt unmarshalling as single secret
			var singleSecret openapi.SecretSvcSecret
			if err := yaml.Unmarshal(data, &singleSecret); err != nil {
				return errors.Wrap(err, "failed to parse secrets file as single or multiple secrets")
			}
			secrets = append(secrets, singleSecret)
		}

		_, _, err = cf.Client(sdk.WithToken(token)).
			SecretSvcAPI.SaveSecrets(ctx).
			Body(openapi.SecretSvcSaveSecretsRequest{
				Secrets: secrets,
			}).
			Execute()
		if err != nil {
			return errors.Wrap(err, "failed to save secrets from file")
		}

		return nil
	}

	return errors.New("invalid arguments: use 'save [key] [value]' or 'save [filePath]'")
}
