package sdk

import openapi "github.com/singulatron/superplatform/clients/go"

type ClientFactory interface {
	Client(opts ...ClientOption) *openapi.APIClient
}
