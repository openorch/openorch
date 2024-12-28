package secret

import (
	"fmt"
	"os"
	"strings"

	"github.com/ghodss/yaml"
	"github.com/openorch/openorch/cli/oo/config"
	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/pkg/errors"
	"github.com/spf13/cobra"
	"golang.org/x/term"
)

// Encrypt [key] [value]
func Encrypt(cmd *cobra.Command, args []string) error {

	key := args[0]
	value := ""

	if len(args) > 1 {
		value = args[1]
	} else {
		// Prompt for secret value securely if not already provided
		fmt.Print("Enter secret value: ")
		bytePassword, err := term.ReadPassword(int(os.Stdin.Fd()))
		if err != nil {
			return errors.Wrap(err, "failed to read secret value")
		}
		value = strings.TrimSpace(string(bytePassword))
		fmt.Println() // Move to the next line after password input
	}

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return errors.Wrap(err, "cannot get env url")
	}

	ctx := cmd.Context()

	cf := sdk.NewApiClientFactory(url)
	rsp, _, err := cf.Client(sdk.WithToken(token)).
		SecretSvcAPI.EncryptValue(ctx).
		Body(openapi.SecretSvcEncryptValueRequest{
			Value: openapi.PtrString(value),
		}).
		Execute()
	if err != nil {
		return errors.Wrap(err, "failed to encrypt value")
	}

	secret := openapi.SecretSvcSecret{
		Id:        openapi.PtrString(sdk.Id("secr")),
		Key:       openapi.PtrString(key),
		Encrypted: openapi.PtrBool(true),
		Value:     rsp.Value,
	}

	bs, err := yaml.Marshal(secret)
	if err != nil {
		return errors.Wrap(err, "failed to encode user info")
	}

	fmt.Print(string(bs))

	return nil
}
