---
sidebar_position: 3
tags:
  - test
---

# Your first service

While OpenOrch itself is written in Go, services that run on OpenOrch can be written in any language.
A service only needs a few things to fully function:

- Must register a user account. This is just like a human user account (for more info about this, see the [User Svc](/docs/built-in-services/user-svc))
- Must register its instance in the registry so OpenOrch knows how where to proxy the requests to.

## A Go example

Below is an example Go service that does the following things:

- Registers a user for itself with the slug `skeleton-svc`
- Registers/updates its own URL in the [Registry](/docs/built-in-services/registry-svc).

```go
package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/pkg/errors"
)

func main() {
	skeletonService, err := NewService()
	if err != nil {
		log.Fatalf("Failed to initialize skeleton service: %v", err)
	}

	router := http.NewServeMux()

	router.HandleFunc("/skeleton-svc/hello", func(w http.ResponseWriter, r *http.Request) {
		skeletonService.Hello(w, r)
	})

	log.Println("Server started on :9311")
	log.Fatal(http.ListenAndServe(":9311", router))

}

type SkeletonService struct {
	token string
}

func NewService() (*SkeletonService, error) {
	spUrl := os.Getenv("OPENORCH_URL")
	if spUrl == "" {
		return nil, errors.New("OPENORCH_URL cannot be found")
	}

	selfUrl := os.Getenv("SELF_URL")

	dsf, err := sdk.NewDatastoreFactory("")
	if err != nil {
		return nil, errors.Wrap(err, "cannot create datastore factory")
	}

	credentialStore, err := dsf("skeletonSvcCredentials", &sdk.Credential{})
	if err != nil {
		return nil, errors.Wrap(err, "cannot create credential store")
	}

	client := sdk.NewApiClientFactory(spUrl).Client()
	token, err := sdk.RegisterService(
		client.UserSvcAPI,
		"skeleton-svc",
		"Skeleton Svc",
		credentialStore,
	)
	if err != nil {
		return nil, errors.Wrap(err, "cannot register service")
	}

	client = sdk.NewApiClientFactory(spUrl).Client(sdk.WithToken(token))
	_, _, err = client.RegistrySvcAPI.RegisterInstance(context.Background()).Body(openapi.RegistrySvcRegisterInstanceRequest{
		Url: selfUrl,
	}).Execute()
	if err != nil {
		return nil, errors.Wrap(err, "cannot register instance")
	}

	repo := &SkeletonService{
		token: token,
	}

	return repo, nil

}

func (skeleton *SkeletonService) Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, `{"hello": "world"}`)
}
```

Just make sure you run it with the appropriate envars:

```sh
OPENORCH_URL=http://127.0.0.1:58231 SELF_URL=http://127.0.0.1:9311 go run main.go
```

Once it's running you will be able to call the Superplatform daemon proxy and that will proxy to your skeleton service:

```sh
# 127.0.0.1:58231 here is the address of the OpenOrch daemon
$ curl 127.0.0.1:58231/skeleton-svc/hello
{"hello": "world"}
```

This is so you don't have to expose your skeleton service to the outside world, only your Superplatform.

Let's recap how the proxying works:

- Service registers an account, acquires the `skeleton-svc` slug.
- Service calls the OpenOrch [Regustry Svc](/docs/built-in-services/registry-svc) to tell the system an instance of the Skeleton service is available under the URL `http://127.0.0.1:9311`
- When you curl the OpenOrch daemon with a path like `127.0.0.1:58231/skeleton-svc/hello`, the first section of the path will be a user account slug. The daemon checks what instances are owned by that slug and routes the request to one of the instances.

```sh
$ oo instance ls
ID                URL                     STATUS    OWNER SLUG       LAST HEARTBEAT
inst_eHFTNvAlk9   http://127.0.0.1:9311   Healthy   skeleton-svc     10s ago
```

## Things to understand

### Instance registration

Like most other things on the platform, service instances become owned by a user account slug. When the skeleton service calls RegisterInstance, the host will be associated with the `skeleton-svc` slug.

Updates to this host won't be possible unless the caller is the skeleton service (or the caller is an admin). The service becomes the owner of that URL essentially.

This is the same ownership model like in other parts of the OpenOrch system.
