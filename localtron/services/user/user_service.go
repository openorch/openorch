/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package userservice

import (
	"crypto/rsa"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/singulatron/singulatron/localtron/datastore"
	"github.com/singulatron/singulatron/localtron/logger"
	"github.com/singulatron/singulatron/localtron/router"

	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
)

type UserService struct {
	router *router.Router

	usersStore       datastore.DataStore
	rolesStore       datastore.DataStore
	permissionsStore datastore.DataStore
	credentialsStore datastore.DataStore
	authTokensStore  datastore.DataStore
	keyPairsStore    datastore.DataStore

	privateKey    *rsa.PrivateKey
	publicKeyPem  string
	serviceUserId string
}

func NewUserService(
	router *router.Router,
	datastoreFactory func(tableName string, instance any) (datastore.DataStore, error),
) (*UserService, error) {
	usersStore, err := datastoreFactory("users", &usertypes.User{})
	if err != nil {
		return nil, err
	}
	rolesStore, err := datastoreFactory("roles", &usertypes.Role{})
	if err != nil {
		return nil, err
	}
	authTokensStore, err := datastoreFactory("authTokens", &usertypes.AuthToken{})
	if err != nil {
		return nil, err
	}
	permissionsStore, err := datastoreFactory("permissions", &usertypes.Permission{})
	if err != nil {
		return nil, err
	}
	credentialsStore, err := datastoreFactory("user_credetentials", &usertypes.Credential{})
	if err != nil {
		return nil, err
	}
	keyPairsStore, err := datastoreFactory("keyPairs", &usertypes.KeyPair{})
	if err != nil {
		return nil, err
	}

	service := &UserService{
		router:           router,
		usersStore:       usersStore,
		rolesStore:       rolesStore,
		authTokensStore:  authTokensStore,
		permissionsStore: permissionsStore,
		credentialsStore: credentialsStore,
		keyPairsStore:    keyPairsStore,
	}

	err = service.registerRoles()
	if err != nil {
		return nil, err
	}

	err = service.registerPermissions()
	if err != nil {
		return nil, err
	}

	err = service.bootstrap()
	if err != nil {
		return nil, err
	}

	return service, nil
}

func (s *UserService) bootstrap() error {
	// bootstrapping keys

	keyPairs, err := s.keyPairsStore.Query(
		datastore.All(),
	).Find()
	if err != nil {
		return err
	}

	if len(keyPairs) > 0 {
		kp := keyPairs[0].(*usertypes.KeyPair)
		privKey, err := privateKeyFromString(kp.PrivateKey)
		if err != nil {
			return err
		}
		s.privateKey = privKey
		s.publicKeyPem = kp.PublicKey
	} else {
		privKey, pubKey, err := generateRSAKeys(4096)
		if err != nil {
			return err
		}
		now := time.Now()
		kp := &usertypes.KeyPair{
			Id:         uuid.New().String(),
			CreatedAt:  now,
			UpdatedAt:  now,
			PublicKey:  pubKey,
			PrivateKey: privKey,
		}
		err = s.keyPairsStore.Upsert(kp)
		if err != nil {
			return err
		}

		privKeyTyped, err := privateKeyFromString(kp.PrivateKey)
		if err != nil {
			return err
		}
		s.privateKey = privKeyTyped
		s.publicKeyPem = kp.PublicKey

	}

	// bootstrap admin user

	count, err := s.usersStore.Query(
		datastore.All(),
	).Count()

	if err != nil {
		return err
	}

	if count > 0 {
		return nil
	}

	_, err = s.register("singulatron", "changeme", "Admin", []string{
		usertypes.RoleAdmin.Id,
	})
	if err != nil {
		return err
	}

	// bootstrapping service user

	credentials, err := s.credentialsStore.Query(datastore.All()).Find()
	if err != nil {
		return err
	}

	email := "user-svc"
	pw := ""

	if len(credentials) > 0 {
		cred := credentials[0].(*usertypes.Credential)
		email = cred.Email
		pw = cred.Password
	} else {
		pw = uuid.New().String()
		err = s.credentialsStore.Upsert(&usertypes.Credential{
			Email:    email,
			Password: pw,
		})
		if err != nil {
			return err
		}
	}

	tok, err := s.login(email, pw)
	if err != nil {
		logger.Info(fmt.Sprintf("Registering the %v service", email))

		usr, err := s.register(email, pw,
			"User Service", []string{
				usertypes.RoleUser.Id,
			})
		if err != nil {
			return err
		}
		s.serviceUserId = usr.Id
	} else {
		usr, err := s.readUserByToken(tok.Token)
		if err != nil {
			return err
		}
		s.serviceUserId = usr.Id
	}

	return nil
}

func (s *UserService) registerRoles() error {
	_, err := s.UpsertRole(
		usertypes.RoleAdmin.Id,
		usertypes.RoleAdmin.Name,
		"",
		usertypes.RoleAdmin.PermissionIds,
	)
	if err != nil {
		return err
	}

	_, err = s.UpsertRole(
		usertypes.RoleUser.Id,
		usertypes.RoleUser.Name,
		"",
		usertypes.RoleUser.PermissionIds,
	)
	if err != nil {
		return err
	}

	return nil
}
