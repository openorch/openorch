---
sidebar_position: 3
tags:
  - test
---

# Your first service

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
	spUrl := os.Getenv("SUPERPLATFORM_URL")
	if spUrl == "" {
		return nil, errors.New("SUPERPLATFORM_URL cannot be found")
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
````

Just make sure you run it with the appropriate envars:

```sh
SUPERPLATFORM_URL=http://127.0.0.1:58231 SELF_URL=http://127.0.0.1:9311 go run main.go
````

Once it's running you will be able to call the Superplatform daemon proxy and that will proxy to your skeleton service:

```sh
$ curl 127.0.0.1:58231/skeleton-svc/hello
{"hello": "world"}
```

This is obviously so you don't have to expose your skeleton service to the outside world, only your Superplatform.

## Things to understand

### Instance registration

Like most other things on the platform, service instances become owned by a slug. When the skeleton service calls RegisterInstance, the host will be associated with the `skeleton-svc` slug.

Updates to this host won't be possible unless the caller is the skeleton service. The service becomes the owner of that host.

This is the same ownership model like in other parts of the system.
