package emailservice

import (
	"context"
	"encoding/json"
	"net/http"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	email "github.com/openorch/openorch/server/internal/services/email/types"
)

// @ID checkoutRepo
// @Summary Checkout a git repository
// @Description Checkout a git repository over https or ssh at a specific version into a temporary directory.
// @Description Performs a shallow clone with minimal history for faster checkout.
// @Tags Email Svc
// @Accept json
// @Produce json
// @Param body body email.SendEmailRequest true "Checkout Repo Request"
// @Success 200 {object} email.SendEmailResponse "Successfully checked out the repository"
// @Failure 400 {object} email.ErrorResponse "Invalid JSON"
// @Failure 401 {object} email.ErrorResponse "Unauthorized"
// @Failure 500 {object} email.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /email-svc/repo/checkout [post]
func (s *EmailService) SendEmail(w http.ResponseWriter,
	r *http.Request) {

	isAuthRsp, _, err := s.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(context.Background(), email.PermissionSendEmail.Id).Body(
		openapi.UserSvcIsAuthorizedRequest{
			SlugsGranted: []string{"deploy-svc"},
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

	req := &email.SendEmailRequest{}
	if err := json.NewDecoder(r.Body).Decode(req); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid JSON`))
		return
	}
	defer r.Body.Close()

	err = s.sendEmail(*req)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	response := email.SendEmailResponse{}

	bs, _ := json.Marshal(response)
	w.Write(bs)
}

func (s *EmailService) sendEmail(
	req email.SendEmailRequest,
) error {
	return nil
}
