/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package chatservice

import (
	"encoding/json"
	"net/http"

	chattypes "github.com/singulatron/singulatron/localtron/services/chat/types"
	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
)

// AddThread creates a new chat thread
// @Summary Add Thread
// @Description Create a new chat thread and add the requesting user to it
// @Tags chat
// @Accept json
// @Produce json
// @Param request body chattypes.AddThreadRequest true "Add Thread Request"
// @Success 200 {object} chattypes.AddThreadResponse "Thread successfully created"
// @Failure 400 {string} string "Invalid JSON"
// @Failure 401 {string} string "Unauthorized"
// @Failure 500 {string} string "Internal Server Error"
// @Router /chat/thread/add [post]
func (a *ChatService) AddThread(
	w http.ResponseWriter,
	r *http.Request,
) {
	rsp := &usertypes.IsAuthorizedResponse{}
	err := a.router.AsRequestMaker(r).Post(r.Context(), "user", "/is-authorized", &usertypes.IsAuthorizedRequest{
		PermissionId: chattypes.PermissionThreadCreate.Id,
	}, rsp)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if !rsp.Authorized {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	req := chattypes.AddThreadRequest{}
	err = json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, `invalid JSON`, http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	if req.Thread == nil {
		http.Error(w, `missing thread`, http.StatusBadRequest)
		return
	}

	req.Thread.UserIds = append(req.Thread.UserIds, rsp.User.Id)

	thread, err := a.addThread(req.Thread)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	jsonData, _ := json.Marshal(chattypes.AddThreadResponse{
		Thread: thread,
	})
	w.Write(jsonData)
}
