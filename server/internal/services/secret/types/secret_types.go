/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package secret_svc

type ErrorResponse struct {
	Error string `json:"error"`
}

type Secret struct {
	Id      string   `json:"id"`      // Id of the secret
	Key     string   `json:"key"`     // Envar or slug-like key of the secret
	Value   string   `json:"value"`   // Secret Value
	Readers []string `json:"readers"` // Slugs of services/users who can read the secret
	Writers []string `json:"writers"` // Slugs of services/users who can modify the secret
}

func (s *Secret) GetId() string {
	return s.Id
}

type ReadSecretRequest struct {
	Key string `json:"key"`
}

type ReadSecretResponse struct {
	Secrets []*Secret `json:"secrets"`
}

type WriteSecretRequest struct {
	Secrets []*Secret `json:"secrets"`
}

type WriteSecretResponse struct {
}
