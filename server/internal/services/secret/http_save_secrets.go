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
	"strings"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	secret "github.com/openorch/openorch/server/internal/services/secret/types"
	"github.com/pkg/errors"
)

// @Id saveSecrets
// @Summary Save Secrets
// @Description Save secrets if authorized to do so
// @Tags Secret Svc
// @Accept json
// @Produce json
// @Param body body secret.SaveSecretsRequest true "Save Secret Request"
// @Success 200 {object} secret.SaveSecretsResponse "Save Secret Response"
// @Failure 401 {string} string "Unauthorized"
// @Failure 500 {string} string "Internal Server Error"
// @Security BearerAuth
// @Router /secret-svc/secrets [put]
func (cs *SecretService) SaveSecrets(
	w http.ResponseWriter,
	r *http.Request,
) {
	isAuthRsp, _, err := cs.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), secret.PermissionSecretSave.Id).
		Body(openapi.UserSvcIsAuthorizedRequest{}).
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

	req := &secret.SaveSecretsRequest{}
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

	jsonData, _ := json.Marshal(secret.SaveSecretsResponse{})
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
		if s.Namespace == "" {
			s.Namespace = "default"
		}

		secretI, found, err := cs.secretStore.Query(
			datastore.Equals([]string{"namespace"}, s.Namespace),
			datastore.Equals([]string{"key"}, s.Key),
		).
			FindOne()
		if err != nil {
			return err
		}
		if !found {
			// When secret key does not exist, it can be "claimed" by any authorized user
			// but non admins can only claim keys prefixed with their user slug
			if !isAdmin && !strings.HasPrefix(s.Key, userSlug) {
				return errors.New("users can only claim secrets prefixed with their user slug")
			}
			if s.Id == "" {
				s.Id = sdk.Id("secr")
			}
			if s.Writers == nil {
				s.Writers = []string{userSlug}
			}
			if s.Readers == nil {
				s.Readers = []string{userSlug}
			}
			if s.Deleters == nil {
				s.Deleters = []string{userSlug}
			}
			if !s.Encrypted {
				s.Value, err = encrypt(s.Value, cs.encryptionKey)
				if err != nil {
					return errors.Wrap(err, "failed to encrypt secret")
				}
			}

			return cs.secretStore.Upsert(s)
		}

		secret := secretI.(*secret.Secret)

		// When a secret is found, it can only be modified by authorized users
		canSave := isAdmin
		if !canSave {
			for _, writer := range secret.Writers {
				if writer == userSlug {
					canSave = true
					break
				}
			}
		}

		if !canSave {
			continue
		}

		if !s.Encrypted {
			s.Value, err = encrypt(s.Value, cs.encryptionKey)
			if err != nil {
				return errors.Wrap(err, "failed to encrypt secret")
			}
		}

		err = cs.secretStore.Upsert(s)
		if err != nil {
			return err
		}
	}

	return nil
}