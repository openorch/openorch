package call

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/pkg/errors"
	"github.com/singulatron/superplatform/cli/config"
	"github.com/singulatron/superplatform/cli/util"
	"github.com/spf13/cobra"
)

func Post(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()

	flagStart := 0
	for i, arg := range args {
		if strings.HasPrefix(arg, "--") {
			flagStart = i
			break
		}
		if i == len(args)-1 {
			flagStart = len(args)
		}
	}

	payload := make(map[string]interface{})
	for _, arg := range args[flagStart:] {
		if err := parseFlagToMap(payload, arg); err != nil {
			return err
		}
	}

	jsonData, err := json.Marshal(payload)
	if err != nil {
		return errors.Wrap(err, "failed to marshal payload to JSON")
	}

	url, token, err := config.GetSelectedUrlAndToken()
	if err != nil {
		return errors.Wrap(err, "cannot get environment URL and token")
	}

	fullUrl := fmt.Sprintf("%s/%s-svc/%s", url, args[0], strings.Join(args[1:flagStart], "/"))
	request, err := http.NewRequestWithContext(ctx, http.MethodPost, fullUrl, bytes.NewBuffer(jsonData))
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
		body, _ := ioutil.ReadAll(resp.Body)
		return fmt.Errorf("HTTP request failed with status %d: %s", resp.StatusCode, string(body))
	}

	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return errors.Wrap(err, "failed to read response body")
	}

	prettyJSON, err := util.PrettyJSON(respBody)
	if err != nil {
		return errors.Wrap(err, "failed to prettify JSON")
	}

	fmt.Println(prettyJSON)

	return nil
}