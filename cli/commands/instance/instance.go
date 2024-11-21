package instance

import (
	"github.com/spf13/cobra"
)

func AddInstanceCommands(rootCmd *cobra.Command) {
	var instanceCmd = &cobra.Command{
		Use:     "instance",
		Aliases: []string{"inst", "instances"},
		Short:   "Manage service instances",
	}

	var listCmd = &cobra.Command{
		Use:   "list",
		Short: "List all environments",
		RunE:  List,
	}

	var deleteCmd = &cobra.Command{
		Use:   "remove [instanceId]",
		Short: "Remove service instance",
		Args:  cobra.ExactArgs(1),
		RunE:  Remove,
	}

	instanceCmd.AddCommand(listCmd)
	instanceCmd.AddCommand(deleteCmd)

	rootCmd.AddCommand(instanceCmd)
}
