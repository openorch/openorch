/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package userservice

import (
	"encoding/json"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
	"github.com/singulatron/singulatron/localtron/datastore"
	"github.com/singulatron/singulatron/localtron/logger"

	user "github.com/singulatron/singulatron/localtron/services/user/types"
)

// @ID isAuthorized
// @Summary Is Authorized
// @Description Check if a user is authorized for a specific permission.
// @Tags User Svc
// @Accept json
// @Produce json
// @Param permissionId path string true "Permission ID"
// @Param body body user.IsAuthorizedRequest true "Is Authorized Request"
// @Success 200 {object} user.IsAuthorizedResponse
// @Failure 400 {object} user.ErrorResponse "Invalid JSON or missing permission id"
// @Failure 401 {object} user.ErrorResponse "Unauthorized"
// @Security BearerAuth
// @Router /user-svc/permission/{permissionId}/is-authorized [post]
func (s *UserService) IsAuthorized(
	w http.ResponseWriter,
	r *http.Request,
) {
	req := &user.IsAuthorizedRequest{}
	//m := map[string]string{}
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, `Invalid JSON`, http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	vars := mux.Vars(r)
	permissionId := vars["permissionId"]

	if permissionId == "" {
		http.Error(w, `missing permission id`, http.StatusBadRequest)
		return
	}

	usr, err := s.isAuthorized(r, permissionId, req.SlugsGranted, nil)
	if err != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	bs, _ := json.Marshal(&user.IsAuthorizedResponse{
		Authorized: true,
		User:       usr,
	})

	w.Write(bs)
}

func (s *UserService) isAuthorized(r *http.Request, permissionId string,
	slugsGranted, contactsGranted []string) (*user.User, error) {
	usr, err := s.getUserFromRequest(r)
	if err != nil {
		return nil, err
	}

	slugGrant := false
	for _, v := range slugsGranted {
		if usr.Slug == v {
			slugGrant = true
		}
	}
	if slugGrant {
		return usr, nil
	}
	roleLinks, err := s.userRoleLinksStore.Query(
		datastore.Equal(datastore.Field("userId"), usr.Id),
	).Find()
	if err != nil {
		return nil, err
	}
	roleIds := []string{}
	for _, role := range roleLinks {
		roleIds = append(roleIds, role.(*user.UserRoleLink).RoleId)
	}

	permissionLinks, err := s.permissionRoleLinksStore.Query(
		datastore.Equal(datastore.Field("roleId"), roleIds),
	).Find()
	if err != nil {
		return nil, err
	}

	for _, permissionLink := range permissionLinks {
		if permissionLink.(*user.PermissionRoleLink).PermissionId == permissionId {
			return usr, nil
		}

	}

	return nil, errors.New("unauthorized")
}

func (s *UserService) getUserFromRequest(r *http.Request) (*user.User, error) {
	authHeader := r.Header.Get("Authorization")
	authHeader = strings.Replace(authHeader, "Bearer ", "", 1)

	if authHeader == "" {
		return nil, fmt.Errorf("Unauthorized")
	}

	tokenI, found, err := s.authTokensStore.Query(
		datastore.Equal(datastore.Field("token"), authHeader),
	).FindOne()
	if err != nil {
		return nil, err
	}

	if !found {
		return nil, errors.New("unauthorized")
	}
	token := tokenI.(*user.AuthToken)

	userI, found, err := s.usersStore.Query(
		datastore.Id(token.UserId),
	).FindOne()
	if err != nil {
		return nil, err
	}
	if !found {
		logger.Error("Token refers to nonexistent user",
			slog.String("userId", token.UserId),
			slog.String("tokenId", token.Id),
		)
		return nil, errors.New("unauthorized")
	}
	user := userI.(*user.User)
	return user, nil
}

func (s *UserService) GetUserFromRequest(request *http.Request) (*user.User, bool, error) {
	authHeader := request.Header.Get("Authorization")
	if authHeader == "" {
		return nil, false, nil
	}
	authHeader = strings.Replace(authHeader, "Bearer ", "", 1)

	tokenI, found, err := s.authTokensStore.Query(
		datastore.Equal(datastore.Field("token"), authHeader),
	).FindOne()
	if err != nil {
		return nil, false, err
	}

	if !found {
		return nil, false, errors.New("unauthorized")
	}
	token := tokenI.(*user.AuthToken)

	userI, found, err := s.usersStore.Query(
		datastore.Id(token.UserId),
	).FindOne()
	if err != nil {
		return nil, false, err
	}
	if !found {
		return nil, false, nil
	}

	user := userI.(*user.User)
	return user, found, nil
}
