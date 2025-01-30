/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package prompt_svc

import (
	"time"

	"github.com/openorch/openorch/sdk/go/clients/llm"
	"github.com/openorch/openorch/sdk/go/clients/stable_diffusion"
	"github.com/openorch/openorch/sdk/go/datastore"
)

type ErrorResponse struct {
	Error string `json:"error"`
}

type SubscriberChan chan *llm.CompletionResponse

type PromptStatus string

const (
	PromptStatusScheduled PromptStatus = "scheduled"
	PromptStatusRunning   PromptStatus = "running"
	PromptStatusCompleted PromptStatus = "completed"
	// Errored means it will be still retried
	PromptStatusErrored   PromptStatus = "errored"
	PromptStatusAbandoned PromptStatus = "abandoned"
	PromptStatusCanceled  PromptStatus = "canceled"
)

type Prompt struct {
	// Id is the unique ID of the prompt.
	Id string `json:"id"`

	// Prompt is the message itself eg. "What's a banana?
	Prompt string `json:"prompt" example:"What's a banana?" binding:"required"`

	// Sync drives whether prompt add request should wait and hang until
	// the prompt is done executing. By default the prompt just gets put on a queue
	// and the client will just subscribe to a Thread Stream.
	// For quick and dirty scripting however it's often times easier to do things syncronously.
	// In those cases set Sync to true.
	Sync bool `json:"sync"`

	// ThreadId is the ID of the thread a prompt belongs to.
	// Clients subscribe to Thread Streams to see the answer to a prompt,
	// or set `prompt.sync` to true for a blocking answer.
	ThreadId string `json:"threadId"`

	// Template of the prompt. Optional. If not present it's derived from ModelId.
	Template string `json:"template" example:"[INST]{prompt}[/INST]"`

	// ModelId is just the OpenOrch internal ID of the model.
	ModelId string `json:"modelId,omitempty" example:"huggingface/TheBloke/mistral-7b-instruct-v0.2.Q3_K_S.gguf"`

	// MaxRetries specified how many times the system should retry a prompt when it keeps erroring.
	MaxRetries int `json:"maxRetries,omitempty" example:"10"`

	// CreatedAt is the time of the prompt creation.
	CreatedAt time.Time `json:"createdAt"`

	// UpdatedAt is the last time the prompt was updated.
	UpdatedAt time.Time `json:"updatedAt"`

	// Status of the prompt.
	Status PromptStatus `json:"status,omitempty"`

	// LastRun is the time of the last prompt run.
	LastRun time.Time `json:"lastRun,omitempty"`

	// RunCount is the number of times the prompt was retried due to errors
	RunCount int `json:"runCount,omitempty"`

	// Error that arose during prompt execution, if any.
	Error string `json:"error,omitempty"`

	// UserId contains the ID of the user who submitted the prompt.
	UserId string `json:"userId"`

	// AI engine/platform (eg. Llama, Stable Diffusion) specific parameters
	EngineParameters EngineParameters `json:"engineParameters,omitempty"`

	// AI engine/platform (eg. Llama, Stable Diffusion) agnostic parameters.
	// Use these high level parameters when you don't care about the actual engine, only
	// the functionality (eg. text to image, image to image) it provides.
	Parameters Parameters `json:"parameters,omitempty"`
}

type Parameters struct {
	TextToImage TextToImageParameters `json:"textToImage,omitempty"`
}

type TextToImageParameters struct {
	Prompt            string   `json:"prompt,omitempty"`
	NegativePrompt    string   `json:"negativePrompt,omitempty"`
	Styles            []string `json:"styles,omitempty"`            // Artistic styles or themes
	Seed              *int     `json:"seed,omitempty"`              // Optional, used for reproducibility
	BatchSize         int      `json:"batchSize,omitempty"`         // Number of images per batch
	NumIterations     int      `json:"numIterations,omitempty"`     // How many times to run the prompt (batches)
	Steps             int      `json:"steps,omitempty"`             // Number of inference steps
	GuidanceScale     float64  `json:"guidanceScale,omitempty"`     // How closely to follow the prompt
	Width             int      `json:"width,omitempty"`             // Image width in pixels
	Height            int      `json:"height,omitempty"`            // Image height in pixels
	AspectRatio       string   `json:"aspectRatio,omitempty"`       // Alternative to width/height (e.g., "16:9", "1:1")
	DenoisingStrength float64  `json:"denoisingStrength,omitempty"` // Noise control for variation
	EnableUpscaling   bool     `json:"enableUpscaling,omitempty"`   // Whether to use AI upscaling
	RestoreFaces      bool     `json:"restoreFaces,omitempty"`      // Face restoration for portraits
	Scheduler         string   `json:"scheduler,omitempty"`         // Sampling method, if applicable
	QualityPreset     string   `json:"qualityPreset,omitempty"`     // Low, Medium, High, Ultra (for services like DALL·E)
	Format            string   `json:"format,omitempty"`            // Output format (png, jpg, webp, etc.)
}

type EngineParameters struct {
	StableDiffusion *StableDiffusionParameters `json:"stableDiffusion,omitempty"`
}

type StableDiffusionParameters struct {
	// Text to image parameters
	Txt2Img stable_diffusion.Txt2ImgRequest
}

func (c *Prompt) GetId() string {
	return c.Id
}

func (c *Prompt) GetUpdatedAt() string {
	return c.Id
}

type AddPromptRequest struct {
	// Id is the unique ID of the prompt.
	Id string `json:"id"`

	// Prompt is the message itself eg. "What's a banana?
	Prompt string `json:"prompt" example:"What's a banana?" binding:"required"`

	// Sync drives whether prompt add request should wait and hang until
	// the prompt is done executing. By default the prompt just gets put on a queue
	// and the client will just subscribe to a Thread Stream.
	// For quick and dirty scripting however it's often times easier to do things syncronously.
	// In those cases set Sync to true.
	Sync bool `json:"sync"`

	// ThreadId is the ID of the thread a prompt belongs to.
	// Clients subscribe to Thread Streams to see the answer to a prompt,
	// or set `prompt.sync` to true for a blocking answer.
	ThreadId string `json:"threadId"`

	// Template of the prompt. Optional. If not present it's derived from ModelId.
	Template string `json:"template" example:"[INST]{prompt}[/INST]"`

	// ModelId is just the OpenOrch internal ID of the model.
	ModelId string `json:"modelId,omitempty" example:"huggingface/TheBloke/mistral-7b-instruct-v0.2.Q3_K_S.gguf"`

	// MaxRetries specified how many times the system should retry a prompt when it keeps erroring.
	MaxRetries int `json:"maxRetries,omitempty" example:"10"`

	// AI engine/platform (eg. Llama, Stable Diffusion) specific parameters
	EngineParameters EngineParameters `json:"engineParameters,omitempty"`

	// AI engine/platform (eg. Llama, Stable Diffusion) agnostic parameters.
	// Use these high level parameters when you don't care about the actual engine, only
	// the functionality (eg. text to image, image to image) it provides.
	Parameters Parameters `json:"parameters,omitempty"`
}

type AddPromptResponse struct {
	Prompt *Prompt `json:"prompt"`
	Answer string  `json:"answer"`
}

type ListPromptsRequest struct {
	Query *datastore.Query `json:"query"`
}

type ListPromptsResponse struct {
	Prompts []*Prompt   `json:"prompts"`
	After   interface{} `json:"after,omitempty"`
	Count   int64       `json:"count"`
}

type RemovePromptRequest struct {
	PromptId string `json:"promptId"`
}

type RemovePromptResponse struct{}

type ListPromptOptions struct {
	Query *datastore.Query `json:"query"`
}
