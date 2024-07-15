/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package modelendpoints

import (
	"encoding/json"
	"net/http"

	modelservice "github.com/singulatron/singulatron/localtron/services/model"
	modeltypes "github.com/singulatron/singulatron/localtron/services/model/types"
	userservice "github.com/singulatron/singulatron/localtron/services/user"
)

func Status(
	w http.ResponseWriter,
	r *http.Request,
	userService *userservice.UserService,
	ms *modelservice.ModelService,
) {
	err := userService.IsAuthorized(modeltypes.PermissionModelView.Id, r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	req := modeltypes.StatusRequest{}
	err = json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, `invalid JSON`, http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	status, err := ms.Status(req.Url)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	jsonData, _ := json.Marshal(modeltypes.StatusResponse{
		Status: status,
	})
	w.Write(jsonData)
}
