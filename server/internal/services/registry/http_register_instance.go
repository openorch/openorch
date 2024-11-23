package registryservice

import (
	"encoding/json"
	"fmt"
	"net/http"

	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	registry "github.com/singulatron/superplatform/server/internal/services/registry/types"
	usertypes "github.com/singulatron/superplatform/server/internal/services/user/types"
)

// Register a new instance
// @ID registerInstance
// @Summary Register Instance
// @Description Registers an instance. Idempoent.
// @Tags Registry Svc
// @Accept json
// @Produce json
// @Param request body registry.RegisterInstanceRequest true "Register Instance Request"
// @Success 201 {object} registry.RegisterInstanceResponse
// @Failure 400 {object} registry.ErrorResponse "Invalid JSON"
// @Failure 401 {object} registry.ErrorResponse "Unauthorized"
// @Failure 500 {object} registry.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /registry-svc/instance [put]
func (rs *RegistryService) RegisterInstance(
	w http.ResponseWriter,
	r *http.Request,
) {

	rsp := &usertypes.IsAuthorizedResponse{}
	err := rs.router.AsRequestMaker(r).
		Post(r.Context(), "user-svc", fmt.Sprintf("/permission/%v/is-authorized", registry.PermissionInstanceEdit.Id), &usertypes.IsAuthorizedRequest{
			SlugsGranted: []string{"deploy-svc"},
		}, rsp)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}
	if !rsp.Authorized {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(`Unauthorized`))
		return
	}

	req := &registry.RegisterInstanceRequest{}
	if err := json.NewDecoder(r.Body).Decode(req); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	err = rs.registerInstance(req)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	go func() {
		rs.triggerChan <- struct{}{}
		// @todo remove this and the tests fail ???
		rs.triggerChan <- struct{}{}
	}()

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(`{}`))
}

func (rs *RegistryService) registerInstance(
	req *registry.RegisterInstanceRequest,
) error {
	var instance registry.Instance

	if req.Id == "" {
		instances, err := rs.instanceStore.Query(datastore.Equals([]string{"url"}, req.URL)).
			Find()
		if err != nil {
			return err
		}

		if len(instances) > 0 {
			instance = *instances[0].(*registry.Instance)
		} else {
			instance.Id = sdk.Id("inst")
		}

	} else {
		instances, err := rs.instanceStore.Query(datastore.Equals([]string{"id"}, req.Id)).Find()
		if err != nil {
			return err
		}

		if len(instances) > 0 {
			instance = *instances[0].(*registry.Instance)
		}
	}

	if req.Id != "" {
		instance.Id = req.Id
	}
	if req.URL != "" {
		instance.URL = req.URL
	}
	if req.Scheme != "" {
		instance.Scheme = req.Scheme
	}
	if req.Host != "" {
		instance.Host = req.Host
	}
	if req.IP != "" {
		instance.IP = req.IP
	}
	if req.Path != "" {
		instance.Path = req.Path
	}
	if req.DeploymentId != "" {
		instance.DeploymentId = req.DeploymentId
	}

	if instance.Status == "" {
		instance.Status = registry.InstanceStatusUnknown
	}

	return rs.instanceStore.Upsert(&instance)
}
