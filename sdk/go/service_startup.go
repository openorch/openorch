package sdk

import (
	"context"
	"fmt"

	"github.com/singulatron/superplatform/sdk/go/datastore"
	"github.com/singulatron/superplatform/sdk/go/logger"

	client "github.com/singulatron/superplatform/clients/go"
)

func RegisterService(userService client.UserSvcAPI, serviceSlug, serviceName string, store datastore.DataStore) (string, error) {
	ctx := context.Background()

	res, err := store.Query().Find()
	if err != nil {
		return "", err
	}

	slug := serviceSlug
	pw := ""

	if len(res) > 0 {
		cred := res[0].(*Credential)
		slug = cred.Slug
		pw = cred.Password
	} else {
		pw = Id("cred")
		err = store.Upsert(&Credential{
			Slug:     slug,
			Password: pw,
		})
		if err != nil {
			return "", err
		}
	}

	loginRsp, _, err := userService.Login(ctx).Request(client.UserSvcLoginRequest{
		Slug:     client.PtrString(slug),
		Password: client.PtrString(pw),
	}).Execute()

	if err != nil {
		logger.Info(fmt.Sprintf("Registering the %v service", serviceSlug))

		_, _, err = userService.Register(ctx).Body(client.UserSvcRegisterRequest{
			Slug:     client.PtrString(slug),
			Name:     client.PtrString(serviceName),
			Password: client.PtrString(pw),
		}).Execute()
		if err != nil {
			return "", err
		}

		loginRsp, _, err = userService.Login(ctx).Request(client.UserSvcLoginRequest{
			Slug:     client.PtrString(slug),
			Password: client.PtrString(pw),
		}).Execute()
		if err != nil {
			return "", err
		}
	}

	return *loginRsp.Token.Token, nil
}

func RegisterUser(userService client.UserSvcAPI, slug, password, username string) (string, error) {
	_, _, err := userService.Register(context.Background()).Body(client.UserSvcRegisterRequest{
		Slug:     client.PtrString(slug),
		Password: client.PtrString(password),
		Name:     client.PtrString(username),
	}).Execute()

	if err != nil {
		return "", err
	}

	loginRsp, _, err := userService.Login(context.Background()).Request(client.UserSvcLoginRequest{
		Slug:     client.PtrString(slug),
		Password: client.PtrString(password),
	}).Execute()
	if err != nil {
		return "", err
	}

	return *loginRsp.Token.Token, nil
}
