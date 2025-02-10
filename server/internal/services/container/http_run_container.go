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
	docker "github.com/openorch/openorch/server/internal/services/container/types"
)

// @ID runContainer
// @Summary Run a Container
// @Description Runs a Docker container with the specified parameters.
// @Description
// @Description Requires the `container-svc:container:run` permission.
// @Tags Container Svc
// @Accept json
// @Produce json
// @Param body body docker.RunContainerRequest true "Run Container Request"
// @Success 200 {object} docker.RunContainerResponse
// @Failure 400 {object} docker.ErrorResponse "Invalid JSON"
// @Failure 401 {object} docker.ErrorResponse "Unauthorized"
// @Failure 500 {object} docker.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /container-svc/container [put]
func (dm *DockerService) RunContainer(
	w http.ResponseWriter,
	r *http.Request,
) {

	isAuthRsp, _, err := dm.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), *docker.PermissionContainerCreate.Id).
		Body(openapi.UserSvcIsAuthorizedRequest{
			GrantedSlugs: []string{"model-svc", "deploy-svc"},
		}).
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

	req := &docker.RunContainerRequest{}
	err = json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	di, err := dm.runContainer(req.Image, req.Port, req.HostPort, req.Options)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(&docker.RunContainerResponse{
		Info: di,
	})
	w.Write(jsonData)
}
