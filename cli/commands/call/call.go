package call

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"

	"github.com/pkg/errors"
	"github.com/singulatron/superplatform/cli/config"
	"github.com/spf13/cobra"
)

// Call method for making a POST request with custom JSON construction from flags
func Call(cmd *cobra.Command, args []string) error {
	ctx := cmd.Context()

	payload := make(map[string]interface{})
	for _, arg := range args {
		if err := parseFlagToJSON(payload, arg); err != nil {
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

	request, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewBuffer(jsonData))
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

	fmt.Println("Request successful")
	return nil
}

func parseFlagToJSON(payload map[string]interface{}, flag string) error {
	if !strings.HasPrefix(flag, "--") {
		return errors.New("invalid flag format")
	}
	flag = strings.TrimPrefix(flag, "--")

	parts := strings.SplitN(flag, "=", 2)
	if len(parts) != 2 {
		return errors.New("invalid flag format")
	}
	key := parts[0]
	valueStr := parts[1]

	value := parseValue(valueStr)

	keyParts := splitKey(key)
	if len(keyParts) == 0 {
		return errors.New("invalid key format")
	}

	if len(keyParts) > 1 && strings.HasSuffix(keyParts[len(keyParts)-2], "-id") {
		parentKey := keyParts[len(keyParts)-2][:len(keyParts[len(keyParts)-2])-3]
		idKey := keyParts[len(keyParts)-1]

		var parentArray []map[string]interface{}
		if existingValue, exists := payload[parentKey]; exists {
			if arr, ok := existingValue.([]map[string]interface{}); ok {
				parentArray = arr
			}
		}

		parentArray = append(parentArray, map[string]interface{}{idKey: value})
		payload[parentKey] = parentArray

		return nil
	}

	currentMap := payload
	for i := 0; i < len(keyParts)-1; i++ {
		part := keyParts[i]
		if existingValue, exists := currentMap[part]; exists {
			if nestedMap, ok := existingValue.(map[string]interface{}); ok {
				currentMap = nestedMap
			} else {
				newMap := make(map[string]interface{})
				currentMap[part] = newMap
				currentMap = newMap
			}
		} else {
			newMap := make(map[string]interface{})
			currentMap[part] = newMap
			currentMap = newMap
		}
	}

	finalKey := keyParts[len(keyParts)-1]
	if existingValue, exists := currentMap[finalKey]; exists {
		switch existingValue := existingValue.(type) {
		case []interface{}:

			currentMap[finalKey] = append(existingValue, value)
		default:

			currentMap[finalKey] = []interface{}{existingValue, value}
		}
	} else {
		currentMap[finalKey] = value
	}

	return nil
}

func splitFlags(flag string) []string {
	return strings.Fields(flag)
}

func splitKey(key string) []string {
	if strings.Contains(key, ".") {
		return strings.Split(key, ".")
	}
	return strings.Split(key, "-")
}

func parseValue(value string) interface{} {
	if intValue, err := strconv.Atoi(value); err == nil {
		return intValue
	}

	if boolValue, err := strconv.ParseBool(value); err == nil {
		return boolValue
	}

	return value
}
