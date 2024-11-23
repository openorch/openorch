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

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	docker "github.com/singulatron/superplatform/server/internal/services/docker/types"
)

// @ID getHost
// @Summary      Get Docker Host
// @Description  Retrieve information about the Docker host
// @Tags         Docker Svc
// @Accept       json
// @Produce      json
// @Success      200   {object}  docker.GetDockerHostResponse
// @Failure      401   {object}  docker.ErrorResponse  "Unauthorized"
// @Failure      500   {object}  docker.ErrorResponse  "Internal Server Error"
// @Security BearerAuth
// @Router       /docker-svc/host [get]
func (dm *DockerService) Host(
	w http.ResponseWriter,
	req *http.Request,
) {

	isAuthRsp, _, err := dm.clientFactory.Client(sdk.WithTokenFromRequest(req)).
		UserSvcAPI.IsAuthorized(req.Context(), docker.PermissionContainerView.Id).
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

	host, err := dm.getDockerHost()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(docker.GetDockerHostResponse{
		Host: host,
	})
	w.Write(jsonData)
}
