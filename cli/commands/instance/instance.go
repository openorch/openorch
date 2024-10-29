package instance

import (
	"github.com/spf13/cobra"
)

func AddInstanceCommands(rootCmd *cobra.Command) {
	var envCmd = &cobra.Command{
		Use:     "instance",
		Aliases: []string{"inst", "instances"},
		Short:   "Manage service instances",
	}

	var envListCmd = &cobra.Command{
		Use:   "list",
		Short: "List all environments",
		RunE:  List,
	}

	envCmd.AddCommand(envListCmd)

	rootCmd.AddCommand(envCmd)
}
