---
sidebar_position: 60
tags:
  - download-svc
  - download
  - containers
  - services
---

# Download Svc

The download service keeps a network local copy of files frequently accessed by services in the OpenOrch platform.

> This page is a high level overview of the `Download Svc`. For more details, please see the [Download Svc API documentation](/docs/openorch/download).

## Responsibilities

- Only download files from the internet once, serve network local file quicker

## Current Limitations

- Serving files doesn't exist yet, services that depend on the Download Svc (such as the [Docker Svc](/docs/built-in-services/docker-svc)) only work when they run on the same node as the Download Svc. This obviously doesn't work in a distributed setting.
