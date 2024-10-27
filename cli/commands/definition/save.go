package definition

import (
	"fmt"
	"os"

	"github.com/pkg/errors"
	"github.com/singulatron/superplatform/cli/config"
	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/spf13/cobra"
	"gopkg.in/yaml.v2"
)

// Save /home/user/definitionA.yaml
func Save(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()

	filePath := args[0]

	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		return errors.Wrap(err, "cannot apply nonexistent file at '%v'")
	}

	file, err := os.Open(filePath)
	if err != nil {
		return errors.Wrap(err, fmt.Sprintf("failed to open file: '%v'", filePath))
	}
	defer file.Close()

	fileInfo, err := file.Stat()
	if err != nil {
		return errors.Wrap(err, fmt.Sprintf("failed to stat service definition file: '%v'", filePath))
	}
	if fileInfo.Size() == 0 {
		return fmt.Errorf("service definition file is empty at '%v'", filePath)
	}

	definition := openapi.RegistrySvcDefinition{}

	decoder := yaml.NewDecoder(file)
	if err := decoder.Decode(&definition); err != nil {
		return errors.Wrap(err, fmt.Sprintf("failed to decode service definition file: '%v'", filePath))
	}

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return errors.Wrap(err, "cannot get env url")
	}

	cf := sdk.NewApiClientFactory(url)

	_, _, err = cf.Client(sdk.WithToken(token)).RegistrySvcAPI.SaveDefinition(ctx).Request(openapi.RegistrySvcSaveDefinitionRequest{
		Definition: &definition,
	}).Execute()
	if err != nil {
		return errors.Wrap(err, "failed to save service definition")
	}

	return nil
}
