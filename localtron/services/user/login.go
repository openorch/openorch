/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */
package userservice

import (
	"crypto/rand"
	"encoding/hex"
	"time"

	"github.com/google/uuid"
	"github.com/singulatron/singulatron/localtron/datastore"
	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
	"golang.org/x/crypto/bcrypt"

	"github.com/pkg/errors"
)

func (s *UserService) Login(email, password string) (*usertypes.AuthToken, error) {
	user, found, err := s.usersStore.Query(
		datastore.Equal("email", email),
	).FindOne()
	if err != nil {
		return nil, err
	}
	if !found {
		return nil, errors.New("unauthorized")
	}

	if !checkPasswordHash(password, user.PasswordHash) {
		return nil, errors.New("unauthorized")
	}

	tokens, err := s.authTokensStore.Query(
		datastore.Equal("id", user.AuthTokenIds),
	).OrderBy("createdAt", true).Find()
	if err != nil {
		return nil, err
	}

	if len(tokens) > 0 {
		return tokens[0], nil
	}

	token := generateAuthToken(user.Id)
	user.AuthTokenIds = append(user.AuthTokenIds, token.Id)

	err = s.authTokensStore.Create(token)
	if err != nil {
		return nil, errors.Wrap(err, "error creating token")
	}

	return token, s.usersStore.Query(
		datastore.Id(user.Id),
	).Update(user)
}

func checkPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func generateAuthToken(userId string) *usertypes.AuthToken {
	randomBytes := make([]byte, 16)
	_, err := rand.Read(randomBytes)
	if err != nil {
		panic(err)
	}
	token := hex.EncodeToString(randomBytes)
	return &usertypes.AuthToken{
		Id:        uuid.New().String(),
		UserId:    userId,
		Token:     token,
		CreatedAt: time.Now(),
	}
}
