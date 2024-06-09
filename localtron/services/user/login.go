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
	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
	"golang.org/x/crypto/bcrypt"
)

func (s *UserService) Login(email, password string) (*usertypes.AuthToken, error) {
	var token *usertypes.AuthToken
	s.usersMem.ForeachStop(func(i int, user *usertypes.User) bool {
		if user.Email == email && checkPasswordHash(password, user.PasswordHash) {
			if len(user.AuthTokenIds) > 0 {
				var found bool
				token, found = s.authTokensMem.FindById(user.AuthTokenIds[0])
				if found {
					return true
				}
			}
			token = generateAuthToken(user.Id)
			user.AuthTokenIds = append(user.AuthTokenIds, token.Id)
			s.usersFile.MarkChanged()
			return true
		}
		return false
	})

	return token, nil
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
