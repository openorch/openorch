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

## Access Rules

### Read

Any logged in user who is amongst a `Secret`'s `Readers` can read a secret.

### Write

#### Create

Any logged in user can create a secret. Non-admin users can only create secrets with the key prefixed by their slug, ie:

```sh
deploy-svc/EXAMPLE-KEY
```

vs

```sh
EMAIL_API_KEY
```

Obviously the `EMAIL_API_KEY` will be set up by an administrator user.

This prefix rule serves two purposes:

- It is clear which secret keys are "static" and originating from admin users
- It can prevent issues where a user claims a key knowing that it might be used later and overwritten/populated by an admin with sensitive information

#### Update

After a key is created further write access is governed by the `Writers` block.

## Design choices

The Secret Svc, like most things in OpenOrch, is designed to be simple to reason about.

```go
type Secret struct {
  Id             string
	Key            string   // Secret key eg. "MY_API_KEY"
	Value          string   // Secret value eg. "nNl4X9\+@95Z
	Readers        []string // Slugs of services and users who can read the secret
	Writers        []string // Slugs of services and users who can modify the secret
  Deleters       []string // Slugs of services and users who can delete the secret
}
```

Instead of the OpenOrch injecting environment variables into service containers when they are deployed, the services are left to their own devices to read secrets from the Secret Svc through normal service calls, using their credentials.

### Encryption at rest

All data is encrypted using the encryption key provided by the envar `OPENORCH_ENCRYPTION_KEY` (see Todo section).

The server encrypts the secret values before saving them to disk/DB. The secret values are transmitted to readers unencrypted.

# Todo

- Make it so the encryption key doesn't have to be exposed in an envar
