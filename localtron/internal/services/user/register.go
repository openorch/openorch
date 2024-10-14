/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package userservice

import (
	"errors"
	"log/slog"
	"time"

	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	"github.com/singulatron/superplatform/sdk/go/logger"
	usertypes "github.com/singulatron/superplatform/server/internal/services/user/types"
	"golang.org/x/crypto/bcrypt"
)

func (s *UserService) register(slug, password, name string, roleIds []string) (*usertypes.AuthToken, error) {
	logger.Info("Registering user", slog.String("name", name))

	_, alreadyExists, err := s.usersStore.Query(
		datastore.Equals(datastore.Field("slug"), slug),
	).FindOne()
	if err != nil {
		return nil, err
	}
	if alreadyExists {
		return nil, errors.New("slug already exists")
	}

	passwordHash, err := hashPassword(password)
	if err != nil {
		return nil, err
	}

	user := &usertypes.User{
		Id:           sdk.Id("usr"),
		CreatedAt:    time.Now(),
		UpdatedAt:    time.Now(),
		Name:         name,
		Slug:         slug,
		PasswordHash: passwordHash,
	}

	err = s.usersStore.Create(user)
	if err != nil {
		return nil, err
	}

	for _, roleId := range roleIds {
		err = s.addRoleToUser(user.Id, roleId)
		if err != nil {
			return nil, err
		}
	}

	token, err := s.generateAuthToken(user)
	if err != nil {
		return nil, err
	}

	return token, s.authTokensStore.Create(token)
}

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(bytes), nil
}
