---
sidebar_position: 60
tags:
  - file-svc
  - file
  - containers
  - services
---

# File Svc

The File Service handles file-related operations, including downloading files from the internet (to cache them for faster access), accepting file uploads, and serving both downloaded and uploaded files.

> This page is a high level overview of the `File Svc`. For more details, please see the [File Svc API documentation](/docs/openorch/download-file).

## Responsibilities

- Download files from the internet and cache them to enable faster local access.
- Accept and store file uploads.
- Serve cached files (downloaded from the internet).
- Serve uploaded files.

## Current Limitations

- Serving files doesn't exist yet, services that depend on the File Svc (such as the [Docker Svc](/docs/built-in-services/docker-svc)) only work when they run on the same node as the File Svc. This obviously doesn't work in a distributed setting.
