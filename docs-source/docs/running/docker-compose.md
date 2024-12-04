---
sidebar_position: 2
tags:
  - run
  - deploy
---

# Docker Compose

This deployment method is one step above local development in terms of sophistication. It’s suitable for a development server or simple production environments.

This snippet will give you a quick idea about how to deploy the frontend and backend containers so they play nicely together:

```yaml
version: "3.8"

volumes:
  openorch-data:
    name: openorch-data
    driver: local

services:
  openorch-frontend:
    image: crufter/openorch-frontend:latest
    ports:
      - "3901:80"
    environment:
      # The `BACKEND_ADDRESS` must be accessible from the   browser.
      # It is not an internal address, it's the address the   browser will make API requests to.
      - BACKEND_ADDRESS=http://127.0.0.1:58231

  openorch-backend:
    image: crufter/openorch-backend:latest
    ports:
      - "58231:58231"
    volumes:
      # We mount the docker socket so the backend can start   containers
      - /var/run/docker.sock:/var/run/docker.sock
      # We mount a volume so data will be persisted
      - openorch-data:/root/.openorch
    environment:
      # This volume will be mounted by the LLM containers to access the models downloaded by OpenOrch.
      - OPENORCH_VOLUME_NAME=openorch-data
      #
      # GPU Acceleration for NVIDIA GPUs
      # Uncomment this envar for NVIDIA GPUs.
      #
      # - OPENORCH_GPU_PLATFORM=cuda
```

Put the above into a file called `docker-compose.yaml` in a folder on your computer and run it with the following command:

```sh
docker compose up
```

## Once it's running

After the containers successfully start, you can go to `127.0.0.1:3901` and log in with the [Default Credentials](/docs/running/using#default-credentials).

## Configuring

See the [Backend Environment Variables](./backend-environment-variables/) and [Frontend Environment Variables](./backend-environment-variables/).
