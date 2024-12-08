/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package userservice

import (
	"crypto/rsa"
	"log/slog"
	"time"

	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	"github.com/openorch/openorch/sdk/go/logger"

	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

type UserService struct {
	clientFactory sdk.ClientFactory
	token         string

	authorizer sdk.Authorizer

	usersStore                 datastore.DataStore
	rolesStore                 datastore.DataStore
	permissionsStore           datastore.DataStore
	credentialsStore           datastore.DataStore
	authTokensStore            datastore.DataStore
	keyPairsStore              datastore.DataStore
	contactsStore              datastore.DataStore
	organizationsStore         datastore.DataStore
	organizationUserLinksStore datastore.DataStore
	userRoleLinksStore         datastore.DataStore
	permissionRoleLinksStore   datastore.DataStore

	privateKey    *rsa.PrivateKey
	publicKeyPem  string
	serviceUserId string
}

func NewUserService(
	clientFactory sdk.ClientFactory,
	authorizer sdk.Authorizer,
	datastoreFactory func(tableName string, instance any) (datastore.DataStore, error),
) (*UserService, error) {
	usersStore, err := datastoreFactory("userSvcUsers", &usertypes.User{})
	if err != nil {
		return nil, err
	}
	rolesStore, err := datastoreFactory("userSvcRoles", &usertypes.Role{})
	if err != nil {
		return nil, err
	}
	authTokensStore, err := datastoreFactory(
		"userSvcAuthTokens",
		&usertypes.AuthToken{},
	)
	if err != nil {
		return nil, err
	}
	permissionsStore, err := datastoreFactory(
		"userSvcPermissions",
		&usertypes.Permission{},
	)
	if err != nil {
		return nil, err
	}
	credentialsStore, err := datastoreFactory(
		"userSvcCredetentials",
		&sdk.Credential{},
	)
	if err != nil {
		return nil, err
	}
	keyPairsStore, err := datastoreFactory(
		"userSvcKeyPairs",
		&usertypes.KeyPair{},
	)
	if err != nil {
		return nil, err
	}
	contactsStore, err := datastoreFactory(
		"userSvcContacts",
		&usertypes.Contact{},
	)
	if err != nil {
		return nil, err
	}
	organizationsStore, err := datastoreFactory(
		"userSvcOrganizations",
		&usertypes.Organization{},
	)
	if err != nil {
		return nil, err
	}
	organizationUserLinksStore, err := datastoreFactory(
		"userSvcOrganizationUserLinks",
		&usertypes.OrganizationUserLink{},
	)
	if err != nil {
		return nil, err
	}
	userRoleLinksStore, err := datastoreFactory(
		"userSvcRoleLinks",
		&usertypes.UserRoleLink{},
	)
	if err != nil {
		return nil, err
	}
	permissionRoleLinksStore, err := datastoreFactory(
		"userSvcPermissionRoleLinks",
		&usertypes.PermissionRoleLink{},
	)
	if err != nil {
		return nil, err
	}

	service := &UserService{
		authorizer:                 authorizer,
		clientFactory:              clientFactory,
		usersStore:                 usersStore,
		rolesStore:                 rolesStore,
		authTokensStore:            authTokensStore,
		permissionsStore:           permissionsStore,
		credentialsStore:           credentialsStore,
		keyPairsStore:              keyPairsStore,
		contactsStore:              contactsStore,
		organizationsStore:         organizationsStore,
		organizationUserLinksStore: organizationUserLinksStore,
		userRoleLinksStore:         userRoleLinksStore,
		permissionRoleLinksStore:   permissionRoleLinksStore,
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

	keyPairs, err := s.keyPairsStore.Query().Find()
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
			Id:         sdk.Id("keyp"),
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

	count, err := s.usersStore.Query().Count()

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

	credentials, err := s.credentialsStore.Query().Find()
	if err != nil {
		return err
	}

	slug := "user-svc"
	pw := ""

	if len(credentials) > 0 {
		cred := credentials[0].(*sdk.Credential)
		slug = cred.Slug
		pw = cred.Password
	} else {
		pw = sdk.Id("cred")
		err = s.credentialsStore.Upsert(&sdk.Credential{
			Slug:     slug,
			Password: pw,
		})
		if err != nil {
			return err
		}
	}

	tok, err := s.login(slug, pw)
	if err != nil {
		logger.Debug("Registering service", slog.String("slug", slug))

		usr, err := s.register(slug, pw,
			"User Svc", []string{
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
	err := s.UpsertRole(
		s.serviceUserId,
		usertypes.RoleAdmin.Id,
		usertypes.RoleAdmin.Name,
		"",
		[]string{},
	)
	if err != nil {
		return err
	}

	err = s.UpsertRole(
		s.serviceUserId,
		usertypes.RoleUser.Id,
		usertypes.RoleUser.Name,
		"",
		[]string{},
	)
	if err != nil {
		return err
	}

	return nil
}
