/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */
package llm

import (
	"bufio"
	"bytes"
	"encoding/json"
	"errors"
	"io/ioutil"
	"log/slog"
	"net/http"

	"github.com/singulatron/singulatron/localtron/lib"
)

type Client struct {
	LLMAddress string
}

func NewClient() *Client {
	return &Client{}
}

type PostCompletionsRequest struct {
	Prompt    string `json:"prompt,omitempty"`
	MaxTokens int    `json:"max_tokens,omitempty"`
	Stream    bool   `json:"stream,omitempty"`
}

type CompletionResponse struct {
	ID      string `json:"id,omitempty"`
	Object  string `json:"object,omitempty"`
	Created int64  `json:"created,omitempty"`
	Model   string `json:"model,omitempty"`
	Choices []struct {
		Text         string      `json:"text,omitempty"`
		Index        int         `json:"index,omitempty"`
		Logprobs     interface{} `json:"logprobs,omitempty"`
		FinishReason string      `json:"finish_reason,omitempty"`
	} `json:"choices"`
	Usage struct {
		PromptTokens     int `json:"prompt_tokens,omitempty"`
		CompletionTokens int `json:"completion_tokens,omitempty"`
		TotalTokens      int `json:"total_tokens,omitempty"`
	} `json:"usage,omitempty"`
}

// Must be only used by the prompt service
func (c *Client) PostCompletions(prompt PostCompletionsRequest) (*CompletionResponse, error) {
	if prompt.Stream {
		return nil, errors.New("streamed completions not supported by this method")
	}

	address := c.LLMAddress

	jsonBody, err := json.Marshal(prompt)
	if err != nil {
		return nil, err
	}

	req, err := http.NewRequest("POST", address+"/v1/completions", bytes.NewBuffer(jsonBody))
	if err != nil {
		return nil, err
	}

	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, errors.New("API request failed with status code: " + resp.Status)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var completionResp CompletionResponse
	err = json.Unmarshal(body, &completionResp)
	if err != nil {
		lib.Logger.Error("Failed to unmarshal response body: %v, due to error: %v", string(body), err)
		return nil, err
	}

	return &completionResp, nil
}

type StreamCallback func(*CompletionResponse)

// Must be only used by the prompt service
func (c *Client) PostCompletionsStreamed(prompt PostCompletionsRequest, callback StreamCallback) error {
	address := c.LLMAddress

	jsonBody, err := json.Marshal(prompt)
	if err != nil {
		return err
	}

	req, err := http.NewRequest("POST", address+"/v1/completions", bytes.NewBuffer(jsonBody))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return errors.New("API request failed with status code: " + resp.Status)
	}

	scanner := bufio.NewScanner(resp.Body)
	for scanner.Scan() {
		line := scanner.Text()
		if len(line) > 5 && line[:5] == "data:" {
			// Parse the JSON content that follows "data:"
			var completionResp CompletionResponse
			dat := line[6:]
			if string(dat) == "[DONE]" {
				continue
			}
			err = json.Unmarshal([]byte(dat), &completionResp)
			if err != nil {
				lib.Logger.Error("Failed to unmarshal streamed response",
					slog.String("error", err.Error()),
					slog.String("marshalledText", string(dat)),
				)
				continue
			}

			callback(&completionResp)
		}
	}

	if err := scanner.Err(); err != nil {
		return err
	}

	return nil
}
