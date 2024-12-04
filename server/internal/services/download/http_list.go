/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package downloadservice

import (
	"encoding/json"
	"net/http"

	sdk "github.com/openorch/openorch/sdk/go"
	download "github.com/openorch/openorch/server/internal/services/download/types"
)

// List retrieves a list of download details
// @ID listDownloads
// @Summary List Downloads
// @Description Fetch a list of all download details.
// @Description
// @Description Requires the `download-svc:download:view` permission.
// @Tags Download Svc
// @Accept json
// @Produce json
// @Success 200 {object} download.DownloadsResponse "List of downloads"
// @Failure 401 {string} string "Unauthorized"
// @Failure 500 {string} string "Internal Server Error"
// @Security BearerAuth
// @Router /download-svc/downloads [post]
func (ds *DownloadService) List(
	w http.ResponseWriter,
	r *http.Request,
) {

	isAuthRsp, _, err := ds.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), download.PermissionDownloadView.Id).
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

	details, err := ds.list()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(download.DownloadsResponse{
		Downloads: details,
	})
	w.Write(jsonData)
}
