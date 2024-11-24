/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package promptservice

import (
	"encoding/json"
	"net/http"

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	prompt "github.com/singulatron/superplatform/server/internal/services/prompt/types"
)

// Add a new prompt
// @ID addPrompt
// @Summary Add Prompt
// @Description Adds a new prompt to the prompt queue and either waits for the response (if `sync` is set to true), or returns immediately.
// @Tags Prompt Svc
// @Accept json
// @Produce json
// @Param request body prompt.AddPromptRequest true "Add Prompt Request"
// @Success 200 {object} prompt.AddPromptResponse
// @Failure 400 {object} prompt.ErrorResponse "Invalid JSON"
// @Failure 401 {object} prompt.ErrorResponse "Unauthorized"
// @Failure 500 {object} prompt.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /prompt-svc/prompt [post]
func (p *PromptService) AddPrompt(
	w http.ResponseWriter,
	r *http.Request,
) {

	isAuthRsp, _, err := p.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), prompt.PermissionPromptCreate.Id).
		Body(openapi.UserSvcIsAuthorizedRequest{}).
		Execute()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}
	if !isAuthRsp.GetAuthorized() {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(`Unauthorized`))
		return
	}

	req := &prompt.AddPromptRequest{}
	err = json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	if isAuthRsp == nil {
		panic("Huh")
	}

	prsp, err := p.addPrompt(r.Context(), req, *isAuthRsp.User.Id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	bs, _ := json.Marshal(prsp)
	w.Write(bs)
}
