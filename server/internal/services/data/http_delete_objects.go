/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package dynamicservice

import (
	"encoding/json"
	"net/http"

	sdk "github.com/openorch/openorch/sdk/go"
	data "github.com/openorch/openorch/server/internal/services/data/types"
)

// @ID deleteObjects
// @Summary     Delete a Generic Object
// @Description Removes a dynamic object from the system based on the provided conditions. Requires authorization and user authentication.
// @Tags        Data Svc
// @Accept      json
// @Produce     json
// @Param       body      body     data.DeleteObjectRequest true "Delete request payload"
// @Success     200       {object} data.DeleteObjectResponse "Successful deletion of object"
// @Failure     400       {object} data.ErrorResponse "Invalid JSON"
// @Failure     401       {object} data.ErrorResponse "Unauthorized"
// @Failure     500       {object} data.ErrorResponse "Internal Server Error"
// @Security    BearerAuth
// @Router      /data-svc/objects/delete [post]
func (g *DataService) Delete(
	w http.ResponseWriter,
	r *http.Request,
) {

	isAuthRsp, _, err := g.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), *data.PermissionObjectDelete.Id).
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

	req := &data.DeleteObjectRequest{}
	err = json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	err = g.delete(req.Table, *isAuthRsp.User.Id, req.Filters)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.Write([]byte(`{}`))
}
