package env

import (
	"fmt"

	"github.com/singulatron/superplatform/cli/config"
	"github.com/spf13/cobra"
)

// Select [name]
func Select(cmd *cobra.Command, args []string) error {
	conf, err := config.LoadConfig()
	if err != nil {
		return fmt.Errorf("failed to load config: %w", err)
	}

	shortName := args[0]

	_, ok := conf.Environments[shortName]
	if !ok {
		return fmt.Errorf("environment %q not found", shortName)
	}

	conf.SelectedEnvironment = shortName

	return config.SaveConfig(conf)
}
