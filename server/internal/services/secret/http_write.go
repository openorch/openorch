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
	"context"
	"encoding/json"
	"net/http"

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	secret "github.com/singulatron/superplatform/server/internal/services/secret/types"
)

// Save saves the secreturation
// @Id writeSecret
// @Summary Write Secret
// @Description Write a secret if authorized
// @Tags Secret Svc
// @Accept json
// @Produce json
// @Param body body secret.WriteSecretRequest true "Write Secret Request"
// @Success 200 {object} secret.WriteSecretResponse "Write Secret Response"
// @Failure 401 {string} string "Unauthorized"
// @Failure 500 {string} string "Internal Server Error"
// @Security BearerAuth
// @Router /secret-svc/secret [put]
func (cs *SecretService) Write(
	w http.ResponseWriter,
	r *http.Request,
) {
	isAuthRsp, _, err := cs.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), secret.PermissionSecretWrite.Id).
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

	req := &secret.WriteSecretRequest{}
	err = json.NewDecoder(r.Body).Decode(req)
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

	err = cs.saveSecrets(
		r.Context(),
		req.Secrets,
		isAdmin,
		*isAuthRsp.User.Slug,
	)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(secret.WriteSecretResponse{})
	w.Write(jsonData)
}

func (cs *SecretService) saveSecrets(
	ctx context.Context,
	ss []*secret.Secret,
	isAdmin bool,
	userSlug string,
) error {
	cs.lock.Acquire(ctx, "secret-svc-save")
	defer cs.lock.Release(ctx, "secret-svc-save")

	for _, s := range ss {
		secretI, found, err := cs.secretStore.Query(datastore.Equals([]string{"key"}, s.Key)).
			FindOne()
		if err != nil {
			return err
		}
		if !found {
			// when secret is not found, it can be "claimed"/created
			// without authorization
			if s.Id == "" {
				s.Id = sdk.Id("secr")
			}
			if s.Writers == nil {
				s.Writers = []string{userSlug}
			}
			if s.Readers == nil {
				s.Readers = []string{userSlug}
			}

			return cs.secretStore.Upsert(s)
		}

		secret := secretI.(*secret.Secret)

		// when secret is found, it can only be modified by authorized users
		canWrite := isAdmin
		if !canWrite {
			for _, writer := range secret.Writers {
				if writer == userSlug {
					canWrite = true
					break
				}
			}
		}

		if !canWrite {
			continue
		}

		err = cs.secretStore.Upsert(s)
		if err != nil {
			return err
		}
	}

	return nil
}
