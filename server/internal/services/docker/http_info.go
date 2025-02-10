/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package dockerservice

import (
	"encoding/json"
	"net/http"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	docker "github.com/openorch/openorch/server/internal/services/docker/types"
)

// @ID getInfo
// @Summary      Get Docker Service Information
// @Description  Retrieve detailed information about the Docker service
// @Tags         Container Svc
// @Accept       json
// @Produce      json
// @Success      200   {object} docker.GetInfoResponse "Service Information"
// @Failure      401   {object} docker.ErrorResponse  "Unauthorized"
// @Failure      500   {object} docker.ErrorResponse  "Internal Server Error"
// @Security BearerAuth
// @Router       /docker-svc/info [get]
func (dm *DockerService) Info(
	w http.ResponseWriter,
	req *http.Request,
) {

	isAuthRsp, _, err := dm.clientFactory.Client(sdk.WithTokenFromRequest(req)).
		UserSvcAPI.IsAuthorized(req.Context(), *docker.PermissionContainerView.Id).
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

	jsonData, _ := json.Marshal(docker.GetInfoResponse{
		Info: di,
	})
	w.Write(jsonData)
}
