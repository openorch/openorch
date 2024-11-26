package secret

import "github.com/spf13/cobra"

func AddSecretCommands(rootCmd *cobra.Command) {
	var secretCmd = &cobra.Command{
		Use:     "secret",
		Aliases: []string{"secrets"},
		Short:   "Manage secrets",
	}

	var saveCmd = &cobra.Command{
		Use:   "save [key] [value]",
		Args:  cobra.ExactArgs(2),
		Short: "Save secrets",
		RunE:  Save,
	}

	var deleteCmd = &cobra.Command{
		Use:     "delete [id]",
		Short:   "Delete a secret",
		Aliases: []string{"del", "rm", "remove"},
		Args:    cobra.ExactArgs(1),
		RunE:    Delete,
	}

	var show bool

	var listCmd = &cobra.Command{
		Use:   "list",
		Short: "List secrets",
		RunE: func(cmd *cobra.Command, args []string) error {
			return List(cmd, args, show)
		},
	}

	listCmd.Flags().
		BoolVar(&show, "show", false, "Show secrets unmasked")

	secretCmd.AddCommand(saveCmd)
	secretCmd.AddCommand(deleteCmd)
	secretCmd.AddCommand(listCmd)

	rootCmd.AddCommand(secretCmd)
}
