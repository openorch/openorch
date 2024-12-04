<p align="center">
  <img width="150px" src="./docs-source/Orch_444.svg?v=2" />
  <div align="center">
    <span>
      <h1>OpenOrch</h1>
    </span>
    <div>Self-hosted AI and microservices hub</div>
    <div>
      <a href="https://openorch.org">openorch.org</a>
    </div>
  </div>
</p>

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/eRXyzeXEvM)](https://discord.gg/eRXyzeXEvM)
![backend build](https://github.com/openorch/openorch/actions/workflows/backend-build-github.yaml/badge.svg)
![frontend build](https://github.com/openorch/openorch/actions/workflows/frontend-container-build-github.yaml/badge.svg)
![go client build](https://github.com/openorch/openorch/actions/workflows/go-client-build.yaml/badge.svg)
![js client build](https://github.com/openorch/openorch/actions/workflows/js-client-build.yaml/badge.svg)
![go sdk](https://github.com/openorch/openorch/actions/workflows/go-sdk-build.yaml/badge.svg)

OpenOrch is a lightweight daemon that transforms your servers into a powerful development environment. It can run AI models, containers, and microservices through a language-agnostic API.
Think of it as a blend of (an extremely simplistic, early-stage) Kubernetes and a framework for building applications on top—designed for fixed-resource setups and straightforward self-hosting.

Whether you're deploying AI or building microservices, OpenOrch is your one-stop shop for creating and managing applications, all while keeping full control over your infrastructure and data.

## Starting

Easiest way to run OpenOrch is with Docker. [Install Docker if you don't have it](https://docs.docker.com/engine/install/).
Step into repo root and:

```sh
docker compose up
```

to run the platform in foreground. It stops running if you Ctrl+C it. If you want to run it in the background:

```sh
docker compose up -d
```

## Using

Now that the OpenOrch is running you have a few options to interact with it.

### UI

You can go to `http://127.0.0.1:3901` and log in with username `singulatron` and password `changeme` and start using it just like you would use ChatGPT.

Click on the big "AI" button and download a model first. Don't worry, this model will be persisted across restarts (see volumes in the docker-compose.yaml).

### Clients

For brevity the below example assumes you went to the UI and downloaded a model already. (That could also be done with clients but would be longer).

Let's do a sync prompting in JS. In your project run

```sh
npm i -s @openorch/client
```

Make sure your `package.json` contains `"type": "module"`, put the following snippet into `index.js`

```ts
import { UserSvcApi, PromptSvcApi, Configuration } from "@openorch/client";

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

and run

```sh
$ node index.js
{
  answer: ' Yes, a cat is an animal.\n' +
    '\n' +
    'But if you meant to ask whether cats are domesticated animals or pets, then the answer is also yes. Cats belong to the Felidae family and are common household pets around the world. They are often kept for companionship and to control rodent populations.',
  prompt: undefined
}
```

Depending on your system it might take a while for the AI to respond.
In case it takes long check the backend logs if it's processing, you should see something like this:

```sh
openorch-backend-1   | {"time":"2024-11-27T17:27:14.602762664Z","level":"DEBUG","msg":"LLM is streaming","promptId":"prom_e3SA9bJV5u","responsesPerSecond":1,"totalResponses":1}
openorch-backend-1   | {"time":"2024-11-27T17:27:15.602328634Z","level":"DEBUG","msg":"LLM is streaming","promptId":"prom_e3SA9bJV5u","responsesPerSecond":4,"totalResponses":9}
```

## Context

OpenOrch is a microservices platform that first came to mind back in 2013 when I was working for an Uber competitor called Hailo. I shelved the idea, thinking someone else would eventually build it. Now, with the AI boom and all the AI apps we’re about to roll out, I’ve realized I’ll have to build it myself since no one else has.

It's a server and ecosystem enables you to self-host AI models, build apps that leverage those models in any language, and utilize a microservices-based communal backend designed to support a diverse range of projects.

## Primary Use Cases

- Run open-source AI models privately on your own infrastructure, ensuring that your data and operations remain fully under your control.
- Build backendless application by using OpenOrch as a database and AI prompting API. Like Firebase, but with a focus on AI.
- Build your own backend services around OpenOrch. Run these services outside or inside the OpenOrch platform.
- OpenOrch is designed to make deploying third-party AI applications straightforward. With its focus on virtualization and containers (primarily Docker) and a microservices, API-first approach (using OpenAPI), OpenOrch seamlessly integrates other applications into its ecosystem.

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

See [this page](https://openorch.org/docs/category/running) to help you get started.

## Services

See https://openorch.org/docs/category/openorch-api/

## Run On Your Laptop/PC

We have temporarily discontinued the distribution of the desktop version. Please refer to this page for alternative methods to run the software.

## License

OpenOrch is licensed under AGPL-3.0.
