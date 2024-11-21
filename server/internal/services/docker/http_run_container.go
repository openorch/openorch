/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package dockerservice

import (
	"encoding/json"
	"fmt"
	"net/http"

	docker "github.com/singulatron/superplatform/server/internal/services/docker/types"
	usertypes "github.com/singulatron/superplatform/server/internal/services/user/types"
)

// @ID runContainer
// @Summary Run a Container
// @Description Runs a Docker container with the specified parameters.
// @Description
// @Description Requires the `docker-svc:container:run` permission.
// @Tags Docker Svc
// @Accept json
// @Produce json
// @Param request body docker.RunContainerRequest true "Run Container Request"
// @Success 200 {object} docker.RunContainerResponse
// @Failure 400 {object} docker.ErrorResponse "Invalid JSON"
// @Failure 401 {object} docker.ErrorResponse "Unauthorized"
// @Failure 500 {object} docker.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /docker-svc/container [put]
func (dm *DockerService) RunContainer(
	w http.ResponseWriter,
	r *http.Request,
) {

	rsp := &usertypes.IsAuthorizedResponse{}

	err := dm.router.AsRequestMaker(r).Post(r.Context(), "user-svc", fmt.Sprintf("/permission/%v/is-authorized", docker.PermissionContainerCreate.Id), &usertypes.IsAuthorizedRequest{
		SlugsGranted: []string{"model-svc", "deploy-svc"},
	}, rsp)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(docker.ErrorResponse{Error: err.Error()})
		return
	}
	if !rsp.Authorized {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(docker.ErrorResponse{Error: "Unauthorized"})
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
