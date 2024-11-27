<p align="center">
  <img width="150px" src="https://singulatron.com/assets/logo_circled_grey.svg?v=1" />
  <div align="center">
    <span>
      <h1>Superplatform</h1>
    </span>
    <div>On-premise AI platform and microservices ecosystem.</div>
    <div>
      <a href="https://superplatform.ai">superplatform.ai</a> 
    </div>
  </div>
</p>

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/eRXyzeXEvM)](https://discord.gg/eRXyzeXEvM)
![backend build](https://github.com/singulatron/superplatform/actions/workflows/backend-build-github.yaml/badge.svg)
![frontend build](https://github.com/singulatron/superplatform/actions/workflows/frontend-container-build-github.yaml/badge.svg)
![go client build](https://github.com/singulatron/superplatform/actions/workflows/go-client-build.yaml/badge.svg)
![js client build](https://github.com/singulatron/superplatform/actions/workflows/js-client-build.yaml/badge.svg)
![go sdk](https://github.com/singulatron/superplatform/actions/workflows/go-sdk-build.yaml/badge.svg)

Superplatform aims to give power back to the developers in the age of AI-self host your own AI platform!

## Quick Start

### Running

Easiest way to run Superplatform is with Docker. [Install Docker if you don't have it](https://docs.docker.com/engine/install/).
Step into repo root and:

```sh
docker compose up
```

to run the platform in foreground. It stops running if you Ctrl+C it. If you want to run it in the background:

```sh
docker compose up -d
```

### Calling

Now that the Superplatform is running you have a few options to interact with it.

## UI

You can go to `http://127.0.0.1:3901` and log in with username `singulatron` and password `changeme` and start using it just like you would use ChatGPT.

Click on the big "AI" button and download a model first. Don't worry, this model will be persisted across restarts (see volumes in the docker-compose.yaml).

## Clients

For brevity the below example assumes you went to the UI and downloaded a model already. (That could also be done with clients but would be longer).

Let's do a sync prompting in JS. In your project run

```sh
npm i -s @superplatform/client
```

```ts
import { UserSvcApi, PromptSvcApi, Configuration } from "@superplatform/client";

async function testDrive() {
  let userService = new UserSvcApi();
  let loginResponse = await userService.login({
    request: {
      slug: "singulatron",
      password: "changeme",
    },
  });

  const promptSvc = new PromptSvcApi(
    new Configuration({
      apiKey: loginResponse.token?.token,
    })
  );

  let promptRsp = await promptSvc.addPrompt({
    request: {
      sync: true,
      prompt: "Is a cat an animal? Just answer with yes or no please.",
    },
  });

  console.log(promptRsp);
}

testDrive();
```

##

## Context

Superplatform is a microservices platform that first came to mind back in 2013 when I was working for an Uber competitor called Hailo. I shelved the idea, thinking someone else would eventually build it. Now, with the AI boom and all the AI apps we’re about to roll out, I’ve realized I’ll have to build it myself since no one else has.

It's a server and ecosystem enables you to self-host AI models, build apps that leverage those models in any language, and utilize a microservices-based communal backend designed to support a diverse range of projects.

## Primary Use Cases

- Run open-source AI models privately on your own infrastructure, ensuring that your data and operations remain fully under your control.
- Build backendless application by using Superplatform as a database and AI prompting API. Like Firebase, but with a focus on AI.
- Build your own backend services around Superplatform. Run these services outside or inside the Superplatform platform.
- Superplatform is designed to make deploying third-party AI applications straightforward. With its focus on virtualization and containers (primarily Docker) and a microservices, API-first approach (using OpenAPI), Superplatform seamlessly integrates other applications into its ecosystem.

<p align="center">
  <a href="https://singulatron.com/assets/chat.png?refresh=3" target="_blank">
    <img width="200px" src="https://singulatron.com/assets/thumbnail/chat.png?refresh=3" />
  </a>
  <a href="https://singulatron.com/assets/model-explorer.png?refresh=3" target="_blank">
    <img width="200px" src="https://singulatron.com/assets/thumbnail/model-explorer.png?refresh=3" />
  </a>
  <a href="https://singulatron.com/assets/permissions.png?refresh=3" target="_blank">
    <img width="200px" src="https://singulatron.com/assets/thumbnail/permissions.png?refresh=3" />
  </a>
  <a href="https://singulatron.com/assets/api.png?refresh=3" target="_blank">
    <img width="200px" src="https://singulatron.com/assets/thumbnail/api.png?refresh=3" />
  </a>
</p>

## Run On Your Servers

See [this page](https://superplatform.ai/docs/category/running) to help you get started.

## Services

See https://superplatform.ai/docs/category/superplatform-api/

## Run On Your Laptop/PC

We have temporarily discontinued the distribution of the desktop version. Please refer to this page for alternative methods to run the software.

## License

Superplatform is licensed under AGPL-3.0.
