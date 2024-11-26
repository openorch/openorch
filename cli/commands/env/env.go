package env

import (
	"github.com/spf13/cobra"
)

func AddEnvCommands(rootCmd *cobra.Command) {
	var envCmd = &cobra.Command{
		Use:   "env",
		Short: "Manage environments",
	}

	var envAddCmd = &cobra.Command{
		Use:   "add [name] [url] [description]",
		Short: "Add a new environment",
		Args:  cobra.RangeArgs(2, 3),
		RunE:  Add,
	}

	var envRemoveCmd = &cobra.Command{
		Use:     "remove [name]",
		Aliases: []string{"rm"},
		Short:   "Remove an environment",
		Args:    cobra.ExactArgs(1),
		RunE:    Remove,
	}

	var envListCmd = &cobra.Command{
		Use:     "list",
		Aliases: []string{"ls"},
		Short:   "List all environments",
		RunE:    List,
	}

	var envCurrentCmd = &cobra.Command{
		Use:   "current",
		Short: "Display current environment",
		RunE:  Current,
	}

	var envSelectCmd = &cobra.Command{
		Use:     "select [name]",
		Aliases: []string{"sel", "switch", "use"},
		Short:   "Select an environment",
		RunE:    Select,
	}

	envCmd.AddCommand(envAddCmd)
	envCmd.AddCommand(envRemoveCmd)
	envCmd.AddCommand(envListCmd)
	envCmd.AddCommand(envCurrentCmd)
	envCmd.AddCommand(envSelectCmd)

	rootCmd.AddCommand(envCmd)
}
