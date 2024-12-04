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
	"strconv"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	docker "github.com/openorch/openorch/server/internal/services/docker/types"
)

// @ID containerSummary
// @Summary      Get Container Summary
// @Description  Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.
// @Tags         Docker Svc
// @Accept       json
// @Produce      json
// @Param        hash           query    string  false  "Container Hash"
// @Param        name           query    string  false  "Container Name"
// @Param        lines          query    int     false  "Number of Lines"
// @Success      200            {object} docker.GetContainerSummaryResponse
// @Failure      400            {object} docker.ErrorResponse  "Invalid JSON or Missing Parameters"
// @Failure      401            {object} docker.ErrorResponse  "Unauthorized"
// @Failure      500            {object} docker.ErrorResponse  "Internal Server Error"
// @Security     BearerAuth
// @Router       /docker-svc/container/summary [get]
func (dm *DockerService) Summary(
	w http.ResponseWriter,
	r *http.Request,
) {

	isAuthRsp, _, err := dm.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), docker.PermissionContainerView.Id).
		Body(openapi.UserSvcIsAuthorizedRequest{
			SlugsGranted: []string{"model-svc"},
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

	q := r.URL.Query()
	hash := q.Get("hash")
	numberOfLines := q.Get("lines")

	name := q.Get("name")
	if name == "" {
		w.WriteHeader(http.StatusNotImplemented)
		w.Write([]byte(`Not Implemented`))
		return
	}

	lines, err := strconv.ParseInt(numberOfLines, 10, 64)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}

	summary, err := dm.getContainerLogsAndStatus(hash, int(lines))
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(&docker.GetContainerSummaryResponse{
		Summary: summary.Summary,
		Logs:    summary.Logs,
		Status:  summary.Status,
	})
	w.Write(jsonData)
}
