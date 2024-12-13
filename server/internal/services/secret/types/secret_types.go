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
	Id       string   `json:"id"`       // Id of the secret
	Key      string   `json:"key"`      // Envar or slug-like key of the secret
	Value    string   `json:"value"`    // Secret Value
	Readers  []string `json:"readers"`  // Slugs of services/users who can read the secret
	Writers  []string `json:"writers"`  // Slugs of services/users who can modify the secret
	Deleters []string `json:"deleters"` // Slugs of services/users who can delete the secret

	// Whether the secret is encrypted
	// All secrets are encrypted before written to the DB.
	// This really only exists for write requests to know if the secret is already encrypted.
	// Ie: while most `secret save [key] [value]` commands are probably not encrypted,
	// File based saves, eg. `secret save secretA.yaml` are probably encrypted.
	Encrypted bool `json:"encrypted"`
}

func (s *Secret) GetId() string {
	return s.Id
}

type ListSecretsRequest struct {
	Key  string   `json:"key"`
	Keys []string `json:"keys"`
}

type ListSecretsResponse struct {
	Secrets []*Secret `json:"secrets"`
}

type SaveSecretsRequest struct {
	Secrets []*Secret `json:"secrets"`
}

type SaveSecretsResponse struct {
}

type EncryptValueRequest struct {
	Value  string   `json:"value"`
	Values []string `json:"values"`
}

type EncryptValueResponse struct {
	Value  string   `json:"value"`
	Values []string `json:"values"`
}

type DecryptValueRequest struct {
	Value  string   `json:"value"`
	Values []string `json:"values"`
}

type DecryptValueResponse struct {
	Value  string   `json:"value"`
	Values []string `json:"values"`
}

type RemoveSecretsRequest struct {
	Key  string   `json:"key"`
	Keys []string `json:"keys"`
	Id   string   `json:"id"`
	Ids  []string `json:"ids"`
}

type RemoveSecretsResponse struct {
}
