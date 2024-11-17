package sourceservice

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"strings"

	git "github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing"
	"github.com/go-git/go-git/v5/plumbing/transport"
	ghttp "github.com/go-git/go-git/v5/plumbing/transport/http"
	gssh "github.com/go-git/go-git/v5/plumbing/transport/ssh"
	sdk "github.com/singulatron/superplatform/sdk/go"
	source "github.com/singulatron/superplatform/server/internal/services/source/types"
	"golang.org/x/crypto/ssh"
)

// @ID checkoutRepo
// @Summary Checkout a git repository
// @Description Checkout a git repository over https or ssh at a specific version into a temporary directory.
// @Description Performs a shallow clone with minimal history for faster checkout.
// @Tags Source Svc
// @Accept json
// @Produce json
// @Success 200 {object} source.SaveDeploymentResponse
// @Failure 400 {object} source.ErrorResponse "Invalid JSON"
// @Failure 401 {object} source.ErrorResponse "Unauthorized"
// @Failure 500 {object} source.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /source-svc/repo/checkout [post]
func (s *SourceService) CheckoutRepo(w http.ResponseWriter,
	r *http.Request) {

	isAuthRsp, _, err := s.clientFactory.Client(sdk.WithTokenFromRequest(r)).UserSvcAPI.IsAuthorized(context.Background(), source.PermissionSourceRepoCheckout.Id).Execute()
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

}

// checkoutRepo checks out a repository at a specified version using the given auth method.
func (s *SourceService) checkoutRepo(
	req source.CheckoutRepoRequest,
) (string, error) {

	tempDir, err := os.MkdirTemp("", fmt.Sprintf("repo-%s-*", req.Version))
	if err != nil {
		return "", fmt.Errorf("failed to create temp dir: %w", err)
	}

	refName := plumbing.NewBranchReferenceName(req.Version)
	if strings.HasPrefix(req.Version, "refs/") || len(req.Version) == 40 { // For tag or commit SHA
		refName = plumbing.ReferenceName(req.Version)
	}

	var authMethod transport.AuthMethod
	if req.SSHKey != "" {
		authMethod, err = getSSHAuth(req.SSHKey, req.SSHKeyPwd, req.Username)
		if err != nil {
			return "", fmt.Errorf("failed to set up SSH auth: %w", err)
		}
	} else {
		// Use basic HTTP auth (GitHub token, Bitbucket app password, etc.)
		authMethod = &ghttp.BasicAuth{
			Username: req.Username,
			Password: req.Password,
		}
	}

	cloneOptions := &git.CloneOptions{
		URL:           req.URL,
		Depth:         1, // Shallow clone
		SingleBranch:  true,
		ReferenceName: refName,
		Auth:          authMethod,
		NoCheckout:    false,
	}

	_, err = git.PlainClone(tempDir, false, cloneOptions)
	if err != nil {
		return "", fmt.Errorf("failed to clone repo: %w", err)
	}

	return tempDir, nil
}

func getSSHAuth(sshKey string, sshKeyPwd string, username string) (transport.AuthMethod, error) {
	signer, err := ssh.ParsePrivateKey([]byte(sshKey))
	if err != nil {
		// If password is provided for private key
		if sshKeyPwd != "" {
			signer, err = ssh.ParsePrivateKeyWithPassphrase([]byte(sshKey), []byte(sshKeyPwd))
			if err != nil {
				return nil, err
			}
		}
		return nil, fmt.Errorf("failed to parse private key: %w", err)
	}

	return &gssh.PublicKeys{
		User:   username,
		Signer: signer,
	}, nil
}
