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

	"github.com/gorilla/mux"
	sdk "github.com/openorch/openorch/sdk/go"
	dynamic "github.com/openorch/openorch/server/internal/services/dynamic/types"
)

// Upsert creates or updates a dynamic object based on the provided data
// @ID upsertObject
// @Summary Upsert a Generic Object
// @Description Creates a new dynamic object or updates an existing one based on the provided data. Requires authorization and user authentication.
// @Tags Dynamic Svc
// @Accept json
// @Produce json
// @Param objectId path string true  "Object ID"
// @Param body body dynamic.UpsertObjectRequest true "Upsert request payload"
// @Success 200 {object} dynamic.UpsertObjectResponse "Successful creation or update of object"
// @Failure 400 {object} dynamic.ErrorResponse "Invalid JSON"
// @Failure 401 {object} dynamic.ErrorResponse "Unauthorized"
// @Failure 500 {object} dynamic.ErrorResponse "Internal Server Error"
// @Security    BearerAuth
// @Router /dynamic-svc/object/{objectId} [put]
func (g *DynamicService) Upsert(
	w http.ResponseWriter,
	r *http.Request,
) {

	isAuthRsp, _, err := g.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), dynamic.PermissionGenericCreate.Id).
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

	req := &dynamic.UpsertObjectRequest{}
	err = json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	for i, v := range req.Object.Readers {
		if v == "_self" {
			req.Object.Readers[i] = *isAuthRsp.User.Id
		}
	}
	for i, v := range req.Object.Writers {
		if v == "_self" {
			req.Object.Writers[i] = *isAuthRsp.User.Id
		}
	}
	for i, v := range req.Object.Deleters {
		if v == "_self" {
			req.Object.Deleters[i] = *isAuthRsp.User.Id
		}
	}

	claims, err := g.authorizer.DecodeJWTFromRequest(g.publicKey, r)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	identifiers := append(claims.RoleIds, *isAuthRsp.User.Id)

	objectId := mux.Vars(r)
	req.Object.Id = objectId["objectId"]

	err = g.upsert(identifiers, req)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.Write([]byte(`{}`))
}
