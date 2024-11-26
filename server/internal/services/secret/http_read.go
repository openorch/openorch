/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package secretservice

import (
	"encoding/json"
	"net/http"

	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	secret "github.com/singulatron/superplatform/server/internal/services/secret/types"
)

// Read a secret by key
// @Id readSecret
// @Summary Read Secret
// @Description Fetch a secret by key, if authorized
// @Tags Secret Svc
// @Accept json
// @Produce json
// @Param body body secret.ReadSecretRequest false "Read Secret Request"
// @Success 200 {object} secret.ReadSecretResponse "Read Secret Response"
// @Failure 401 {string} string "Unauthorized"
// @Failure 500 {string} string "Internal Server Error"
// @Security BearerAuth
// @Router /secret-svc/secret [post]
func (cs *SecretService) Read(
	w http.ResponseWriter,
	r *http.Request,
) {
	isAuthRsp, _, err := cs.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), secret.PermissionSecretRead.Id).
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

	req := secret.ReadSecretRequest{}
	err = json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	isAdmin, err := cs.authorizer.IsAdminFromRequest(cs.publicKey, r)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	ss, err := cs.getSecrets(req, isAdmin, *isAuthRsp.User.Slug)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(secret.ReadSecretResponse{
		Secrets: ss,
	})
	w.Write(jsonData)
}

func (cs *SecretService) getSecrets(
	req secret.ReadSecretRequest, isAdmin bool, userSlug string,
) ([]*secret.Secret, error) {
	filters := []datastore.Filter{}
	if req.Key != "" {
		filters = append(filters, datastore.Equals([]string{"key"}, req.Key))
	}

	secretIs, err := cs.secretStore.Query(filters...).Find()
	if err != nil {
		return nil, err
	}

	secrets := []*secret.Secret{}
	for _, secretI := range secretIs {
		s := secretI.(*secret.Secret)
		canRead := isAdmin

		if !canRead {
			for _, slug := range s.Readers {
				if slug == userSlug {
					canRead = true
					break
				}
			}
		}

		if !canRead {
			continue
		}

		secrets = append(secrets, s)
	}

	return secrets, nil
}
