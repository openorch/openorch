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

> This page is a high level overview of the `Secret Svc`. For more details, please see the [Secret Svc API documentation](/docs/openorch/read-secret).

## Design Choices

The Secret Svc, like most things in OpenOrch, is designed to be simple to reason about.

```go
type Secret struct {
	Key            string   // Identifier for the secret
	Value          string   // Secret value
	Readers        []string // Slugs of services/users who can read the secret
	Writers        []string // Slugs of services/users who can modify the secret
}
```

Instead of the OpenOrch injecting environment variables into service containers when they are deployed, the services are left to their own devices to read secrets from the Secret Svc through normal service calls, using their credentials.

## Limitations

- Secrets are not encrypted at rest yet
- Secrets are not encrypted at transit
