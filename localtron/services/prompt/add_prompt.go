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
package promptservice

import (
	"github.com/singulatron/singulatron/localtron/lib"
	prompttypes "github.com/singulatron/singulatron/localtron/services/prompt/types"
)

func (p *PromptService) AddPrompt(prompt *prompttypes.Prompt) error {
	p.promptsToProcessMutex.Lock()
	p.promptsToProcess = append(p.promptsToProcess, prompt)
	p.promptsToProcessMutex.Unlock()

	p.firehoseService.Publish(prompttypes.EventPromptAdded{})

	go p.triggerPromptProcessing()
	return nil
}

func (p *PromptService) triggerPromptProcessing() {
	select {
	case p.trigger <- true:
		lib.Logger.Debug("Prompt trigger signal sent")
	default:
		lib.Logger.Debug("Prompt trigger signal skipped, already pending")
	}
}
