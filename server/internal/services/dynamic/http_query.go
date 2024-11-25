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

	"github.com/samber/lo"

	sdk "github.com/singulatron/superplatform/sdk/go"
	dynamic "github.com/singulatron/superplatform/server/internal/services/dynamic/types"
)

// Query retrieves objects based on provided criteria
// @ID query
// @Summary Query Objects
// @Description Retrieves objects from a specified table based on search criteria.
// @Description Requires authorization and user authentication.
// @Description
// @Description
// @Description Use helper functions in your respective client library such as condition constructors (`equal`, `contains`, `startsWith`) and field selectors (`field`, `fields`, `id`) for easier access.
// @Tags Dynamic Svc
// @Accept json
// @Produce json
// @Param body body dynamic.QueryRequest false "Query Request"
// @Success 200 {object} dynamic.QueryResponse "Successful retrieval of objects"
// @Failure 400 {object} dynamic.ErrorResponse "Invalid JSON"
// @Failure 401 {object} dynamic.ErrorResponse "Unauthorized"
// @Failure 500 {object} dynamic.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /dynamic-svc/objects [post]
func (g *DynamicService) Query(
	w http.ResponseWriter,
	r *http.Request,
) {

	isAuthRsp, _, err := g.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), dynamic.PermissionGenericView.Id).
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

	req := &dynamic.QueryRequest{}
	err = json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	claims, err := g.authorizer.DecodeJWTFromRequest(g.publicKey, r)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	for i, v := range req.Readers {
		if v == "_self" {
			req.Readers[i] = *isAuthRsp.User.Id
		}
	}

	identifiers := append(
		claims.RoleIds,
		[]string{*isAuthRsp.User.Id, dynamic.AnyIdentifier}...)
	allowedReaders := lo.Intersect(identifiers, req.Readers)

	objects, err := g.query(allowedReaders, dynamic.QueryOptions{
		Table: req.Table,
		Query: req.Query,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	bs, _ := json.Marshal(dynamic.QueryResponse{
		Objects: objects,
	})
	w.Write(bs)
}
