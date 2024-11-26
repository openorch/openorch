package node

import "github.com/spf13/cobra"

func AddNodeCommands(rootCmd *cobra.Command) {
	var nodeCmd = &cobra.Command{
		Use:     "node",
		Aliases: []string{"nodes"},
		Short:   "Manage nodes",
	}

	var deleteCmd = &cobra.Command{
		Use:     "delete [url]",
		Short:   "Delete a node by URL",
		Aliases: []string{"del", "rm", "remove"},
		Args:    cobra.ExactArgs(1),
		RunE:    Delete,
	}

	var listCmd = &cobra.Command{
		Use:   "list",
		Short: "List nodes",
		RunE:  List,
	}

	nodeCmd.AddCommand(deleteCmd)
	nodeCmd.AddCommand(listCmd)

	rootCmd.AddCommand(nodeCmd)
}
