/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package configservice

import (
	"encoding/json"
	"net/http"

	config "github.com/openorch/openorch/server/internal/services/config/types"
	types "github.com/openorch/openorch/server/internal/services/config/types"
	"github.com/pkg/errors"
	"github.com/spyzhov/ajson"
)

// Get retrieves the current configuration
// @Id getConfig
// @Summary Get Config
// @Description Fetch the current configuration from the server
// @Tags Config Svc
// @Accept json
// @Produce json
// @Success 200 {object} config.GetConfigResponse "Current configuration retrieved successfully"
// @Failure 401 {string} string "Unauthorized"
// @Failure 500 {string} string "Internal Server Error"
// @Security BearerAuth
// @Router /config-svc/config [get]
func (cs *ConfigService) Get(
	w http.ResponseWriter,
	r *http.Request,
) {
	// Config get should not be authorized because it is public, nonsensitive information.
	// Think about app config, A/B tests and such.

	req := &config.GetConfigRequest{}
	err := json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	conf, err := cs.getConfig(req.Namespace)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(config.GetConfigResponse{
		Config: conf,
	})
	w.Write(jsonData)
}

func (cs *ConfigService) getConfig(namespace string) (*types.Config, error) {
	if namespace == "" {
		namespace = "default"
	}
	ajsonRoot, ok := cs.configAJSONs[namespace]
	if !ok {
		return nil, errors.New("config not found")
	}
	v, err := ajson.Marshal(ajsonRoot)
	if err != nil {
		return nil, errors.Wrap(err, "failed to marshal config")
	}

	ret := &types.Config{}
	err = json.Unmarshal(v, ret.Data)
	if err != nil {
		return nil, errors.Wrap(err, "failed to unmarshal config")
	}

	return ret, nil
}
