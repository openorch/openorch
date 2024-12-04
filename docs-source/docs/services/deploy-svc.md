---
sidebar_position: 90
tags:
  - deploy-svc
  - deploy
  - containers
  - services
---

# Deploy Svc

The deploy service is responsible of launching containers on whatever infrastructure the OpenOrch is running on (eg. [Docker Svc](/docs/services/docker-svc)) and registering them into the [Registry Svc](/docs/services/docker-svc).

It registers services it launches since services are not expected to self register. This is to support services that are not using the OpenOrch SDK to build themselves—in other words, OpenOrch is designed to be able to run non-OpenOrch services too.

> This page is a high level overview of the `Deploy Svc`. For more details, please see the [Deploy Svc API documentation](/docs/openorch/save-deployment).

## Dependencies

- [Docker Svc](/docs/services/docker-svc) to start containers of services
- [Registry Svc](/docs/services/registry-svc) to start containers of services
