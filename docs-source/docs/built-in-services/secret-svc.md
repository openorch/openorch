---
sidebar_position: 100
tags:
  - secret-svc
  - secrets
  - configuration
  - services
---

# Secret Svc

The Secret Svc stores sensitive or internal (non-end-user-facing) configuration. Aims to store all configuration not required at bootstrap, both for internal and external services.

> This page is a high level overview of the `Secret Svc`. For more details, please see the [Secret Svc API documentation](/docs/openorch/list-secrets).

## Design choices

The Secret Svc, like most things in OpenOrch, is designed to be simple to reason about.

```go
type Secret struct {
	Key            string   // Secret key eg. "MY_API_KEY"
	Value          string   // Secret value eg. "nNl4X9\+@95Z"
	Readers        []string // Slugs of services and users who can read the secret
	Writers        []string // Slugs of services and users who can modify the secret
}
```

Instead of the OpenOrch injecting environment variables into service containers when they are deployed, the services are left to their own devices to read secrets from the Secret Svc through normal service calls, using their credentials.

## About readers and writers

At the moment only admins can read or write secrets. The system is only designed to work for service 2 service calls. In the future with readers and writers we might create a more multitenant system where even non-admins can read and write secrets.

### Encryption at rest

All data is encrypted using the encryption key provided by the envar `OPENORCH_ENCRYPTION_KEY` (see Todo section).

The server encrypts the secret values before saving them to disk/DB. The secret values are transmitted to readers unencrypted.

# Todo

- Make it so the encryption key doesn't have to be exposed in an envar
