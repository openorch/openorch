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
	Id      string   // Unique identifier for the secret
	Key     string   // Identifier for the secret
	Value   string   // Plaintext value (only stored temporarily in memory, if at all)
	Readers []string // Slugs of services/users who can read the secret
	Writers []string // Slugs of services/users who can modify the secret
}

func (s *Secret) GetId() string {
	return s.Id
}

type ReadSecretRequest struct {
	Key string `json:"key"`
}

type ReadSecretResponse struct {
	Found  bool    `json:"found"`
	Secret *Secret `json:"secret"`
}

type WriteSecretRequest struct {
	Secret *Secret `json:"secret"`
}

type WriteSecretResponse struct {
}
