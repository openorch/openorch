/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package containerservice

import (
	"encoding/json"
	"net/http"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	container "github.com/openorch/openorch/server/internal/services/container/types"
)

// @ID getInfo
// @Summary      Get Docker Service Information
// @Description  Retrieve detailed information about the Container service
// @Tags         Container Svc
// @Accept       json
// @Produce      json
// @Success      200   {object} container.GetInfoResponse "Service Information"
// @Failure      401   {object} container.ErrorResponse  "Unauthorized"
// @Failure      500   {object} container.ErrorResponse  "Internal Server Error"
// @Security BearerAuth
// @Router       /container-svc/info [get]
func (dm *DockerService) Info(
	w http.ResponseWriter,
	req *http.Request,
) {

	isAuthRsp, _, err := dm.clientFactory.Client(sdk.WithTokenFromRequest(req)).
		UserSvcAPI.IsAuthorized(req.Context(), *container.PermissionContainerView.Id).
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

	di, err := dm.info()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(container.GetInfoResponse{
		Info: di,
	})
	w.Write(jsonData)
}
