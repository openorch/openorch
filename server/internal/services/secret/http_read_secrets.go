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

	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	secret "github.com/openorch/openorch/server/internal/services/secret/types"
	"github.com/pkg/errors"
)

// Read a secret by key
// @Id readSecrets
// @Summary Read Secrets
// @Description Read secrets by key(s) if authorized.
// @Tags Secret Svc
// @Accept json
// @Produce json
// @Param body body secret.ReadSecretsRequest false "Read Secret Request"
// @Success 200 {object} secret.ReadSecretsResponse "Read Secret Response"
// @Failure 401 {string} string "Unauthorized"
// @Failure 500 {string} string "Internal Server Error"
// @Security BearerAuth
// @Router /secret-svc/secrets [post]
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

	req := secret.ReadSecretsRequest{}
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

	jsonData, _ := json.Marshal(secret.ReadSecretsResponse{
		Secrets: ss,
	})
	w.Write(jsonData)
}

func (cs *SecretService) getSecrets(
	req secret.ReadSecretsRequest, isAdmin bool, userSlug string,
) ([]*secret.Secret, error) {
	filters := []datastore.Filter{}
	if req.Key != "" {
		filters = append(filters, datastore.Equals([]string{"key"}, req.Key))
	}
	if req.Keys != nil {
		filters = append(filters, datastore.IsInList([]string{"key"}, req.Keys))
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

		s.Value, err = decrypt(s.Value, cs.encryptionKey)
		if err != nil {
			return nil, errors.Wrap(err, "failed to decrypt secret")
		}

		secrets = append(secrets, s)
	}

	return secrets, nil
}
