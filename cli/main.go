package main

import (
	"os"

	"github.com/spf13/cobra"

	call "github.com/openorch/openorch/cli/commands/call"
	definition "github.com/openorch/openorch/cli/commands/definition"
	deployment "github.com/openorch/openorch/cli/commands/deployment"
	"github.com/openorch/openorch/cli/commands/env"
	instance "github.com/openorch/openorch/cli/commands/instance"
	"github.com/openorch/openorch/cli/commands/node"
	secret "github.com/openorch/openorch/cli/commands/secret"
	"github.com/openorch/openorch/cli/commands/user/login"
	"github.com/openorch/openorch/cli/commands/user/token"
	"github.com/openorch/openorch/cli/commands/user/whoami"
)

func main() {
	var rootCmd = &cobra.Command{
		Use:   "sup",
		Short: "OpenOrch CLI",

		RunE: func(cmd *cobra.Command, args []string) error {
			return cmd.Help()
		},
		SilenceUsage: true,
	}

	addLoginCommands(rootCmd)
	addWhoamiCommands(rootCmd)
	addTokenCommands(rootCmd)
	addCallCommands(rootCmd)

	env.AddEnvCommands(rootCmd)
	definition.AddDefinitionCommands(rootCmd)
	instance.AddInstanceCommands(rootCmd)
	deployment.AddDeploymentCommands(rootCmd)
	node.AddNodeCommands(rootCmd)
	secret.AddSecretCommands(rootCmd)

	if err := rootCmd.Execute(); err != nil {
		os.Exit(1)
	}
}

func addLoginCommands(rootCmd *cobra.Command) {
	var runCmd = &cobra.Command{
		Use:   "login [slug] [password]",
		Args:  cobra.MaximumNArgs(2),
		Short: "Log in to the currently selected environment.",
		Long: `The 'login' command allows you to authenticate a user in the currently selected environment.

If no arguments are provided, the command will prompt for the username (slug) and password securely.
If only the username (slug) is provided, the command will securely prompt for the password.
If both the username and password are provided as arguments, the login will proceed, but keep in mind 
that the password will be visible in the terminal command history.`,
		Example: `  # Login with slug and prompt for password
  sup login johnny

  # Login by providing both slug and password (not secure, avoid this)
  sup login johnny myPass1`,
		RunE: login.Login,
	}

	rootCmd.AddCommand(runCmd)
}

func addWhoamiCommands(rootCmd *cobra.Command) {
	var runCmd = &cobra.Command{
		Use:   "whoami",
		Args:  cobra.ExactArgs(0),
		Short: "Display the user currently logged in",
		RunE:  whoami.Whoami,
	}

	rootCmd.AddCommand(runCmd)
}

func addTokenCommands(rootCmd *cobra.Command) {
	var runCmd = &cobra.Command{
		Use: "token",
		// Args:  cobra.ExactArgs(0),
		Short: "Display the token of the user currently logged in",
		RunE:  token.Token,
	}

	rootCmd.AddCommand(runCmd)
}

func addCallCommands(rootCmd *cobra.Command) {
	var postCmd = &cobra.Command{
		Use:                "post [service] [password] [key=value]...",
		Args:               cobra.ArbitraryArgs,
		Short:              "Make a POST request to a service",
		RunE:               call.Post,
		DisableFlagParsing: true,
	}
	var getCmd = &cobra.Command{
		Use:                "get [service] [password] [key=value]...",
		Args:               cobra.ArbitraryArgs,
		Short:              "Make a GET request to a service",
		RunE:               call.Get,
		DisableFlagParsing: true,
	}
	var putCmd = &cobra.Command{
		Use:                "put [service] [password] [key=value]...",
		Args:               cobra.ArbitraryArgs,
		Short:              "Make a PUT request to a service",
		RunE:               call.Put,
		DisableFlagParsing: true,
	}
	var deleteCmd = &cobra.Command{
		Use:                "delete [service] [password] [key=value]...",
		Args:               cobra.ArbitraryArgs,
		Short:              "Make a DELETE request to a service",
		RunE:               call.Delete,
		DisableFlagParsing: true,
	}

	rootCmd.AddCommand(postCmd)
	rootCmd.AddCommand(getCmd)
	rootCmd.AddCommand(putCmd)
	rootCmd.AddCommand(deleteCmd)
}
