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
	"context"
	"encoding/json"
	"net/http"

	"github.com/docker/docker/api/types/container"
	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	docker "github.com/openorch/openorch/server/internal/services/docker/types"
)

// @ID stopContainer
// @Summary Stop a Container
// @Description Stops a Docker container with the specified parameters.
// @Description
// @Description Requires the `docker-svc:container:stop` permission.
// @Tags Docker Svc
// @Accept json
// @Produce json
// @Param body body docker.StopContainerRequest true "Stop Container Request"
// @Success 200 {object} docker.StopContainerResponse
// @Failure 400 {object} docker.ErrorResponse "Invalid JSON"
// @Failure 401 {object} docker.ErrorResponse "Unauthorized"
// @Failure 500 {object} docker.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /docker-svc/container/stop [put]
func (dm *DockerService) StopContainer(
	w http.ResponseWriter,
	r *http.Request,
) {

	isAuthRsp, _, err := dm.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), *docker.PermissionContainerStop.Id).
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

	req := &docker.StopContainerRequest{}
	err = json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	err = dm.stopContainer(r.Context(), req)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(&docker.StopContainerResponse{})
	w.Write(jsonData)
}

func (dm *DockerService) stopContainer(
	ctx context.Context,
	req *docker.StopContainerRequest,
) error {
	stopID := req.Id
	if stopID == "" {
		stopID = req.Name
	}

	return dm.client.ContainerStop(ctx, stopID, container.StopOptions{})
}
