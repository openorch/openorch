package call

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"

	"github.com/pkg/errors"
	"github.com/singulatron/superplatform/cli/config"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
)

func Get(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()

	if len(args) < 2 {
		return fmt.Errorf(
			"insufficient arguments: service and endpoint are required",
		)
	}

	uri, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return errors.Wrap(err, "cannot get environment URL and token")
	}

	fullUrl := fmt.Sprintf(
		"%s/%s-svc/%s",
		uri,
		args[0],
		strings.Join(args[1:], "/"),
	)

	queryParams := make(map[string]string)

	cmd.Flags().VisitAll(func(flag *pflag.Flag) {
		// Convert the flag name and value to query parameters
		// For example, --key=value becomes ?key=value in the URL
		queryParams[flag.Name] = flag.Value.String()
	})

	var queryStrings []string
	for key, value := range queryParams {
		encodedValue := url.QueryEscape(value)
		queryStrings = append(
			queryStrings,
			fmt.Sprintf("%s=%s", key, encodedValue),
		)
	}

	if len(queryStrings) > 0 {
		fullUrl = fmt.Sprintf("%s?%s", fullUrl, strings.Join(queryStrings, "&"))
	}

	request, err := http.NewRequestWithContext(
		ctx,
		http.MethodGet,
		fullUrl,
		nil,
	)
	if err != nil {
		return errors.Wrap(err, "failed to create HTTP request")
	}
	request.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
	request.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(request)
	if err != nil {
		return errors.Wrap(err, "failed to execute HTTP request")
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 400 {
		return fmt.Errorf("HTTP request failed with status %d", resp.StatusCode)
	}

	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return errors.Wrap(err, "failed to read response body")
	}

	fmt.Println(string(respBody))

	return nil
}
