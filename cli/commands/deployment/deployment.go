package deployment

import "github.com/spf13/cobra"

func AddDeploymentCommands(rootCmd *cobra.Command) {
	var envCmd = &cobra.Command{
		Use:     "deployment",
		Aliases: []string{"depl", "deployments"},
		Short:   "Manage deployments",
	}

	var envSaveCmd = &cobra.Command{
		Use:   "save [filePath]",
		Args:  cobra.ExactArgs(1),
		Short: "Save deployment(s) found in a JSON or YAML file",
		RunE:  Save,
	}

	var envDeleteCmd = &cobra.Command{
		Use:     "delete [id]",
		Short:   "Delete a deployment",
		Aliases: []string{"del", "rm", "remove"},
		Args:    cobra.ExactArgs(1),
		RunE:    Delete,
	}

	var full bool

	var envListCmd = &cobra.Command{
		Use:   "list",
		Short: "List deployments",
		RunE: func(cmd *cobra.Command, args []string) error {
			return List(cmd, args, full)
		},
	}

	envListCmd.Flags().BoolVar(&full, "full", false, "Show full deployment details without truncation")

	envCmd.AddCommand(envSaveCmd)
	envCmd.AddCommand(envDeleteCmd)
	envCmd.AddCommand(envListCmd)

	rootCmd.AddCommand(envCmd)
}
