<p align="center">
  <img width="150px" src="./docs-source/Orch_444.svg?v=3" />
  <div align="center">
    <span>
      <h1 style="border-bottom: none">OpenOrch</h1>
      <a href="https://discord.gg/eRXyzeXEvM" rel="nofollow"><img src="https://camo.githubusercontent.com/66351093b042f69e9698398d33f08a6c36f1b7c56e1494b1e2902950eb24c94f/68747470733a2f2f646362616467652e6c696d65732e70696e6b2f6170692f7365727665722f68747470733a2f2f646973636f72642e67672f655258797a655845764d" alt="" data-canonical-src="https://dcbadge.limes.pink/api/server/https://discord.gg/eRXyzeXEvM" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/openorch/openorch/actions/workflows/backend-build-github.yaml/badge.svg"><img src="https://github.com/openorch/openorch/actions/workflows/backend-build-github.yaml/badge.svg" alt="backend build" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/openorch/openorch/actions/workflows/frontend-container-build-github.yaml/badge.svg"><img src="https://github.com/openorch/openorch/actions/workflows/frontend-container-build-github.yaml/badge.svg" alt="frontend build" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/openorch/openorch/actions/workflows/go-client-build.yaml/badge.svg"><img src="https://github.com/openorch/openorch/actions/workflows/go-client-build.yaml/badge.svg" alt="go client build" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/openorch/openorch/actions/workflows/js-client-build.yaml/badge.svg"><img src="https://github.com/openorch/openorch/actions/workflows/js-client-build.yaml/badge.svg" alt="js client build" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/openorch/openorch/actions/workflows/go-sdk-build.yaml/badge.svg"><img src="https://github.com/openorch/openorch/actions/workflows/go-sdk-build.yaml/badge.svg" alt="go sdk" style="max-width: 100%;"></a>
    </span>
    <div style="margin-top: 2rem">Build smarter. A unified backend platform for AI, microservices, and beyond.</div>
    <div>
      <a href="https://openorch.org">openorch.org</a>
    </div>
  </div>
</p>

OpenOrch is, at its core, a microservices development platform—a shared backend designed to supercharge your development process. But it doesn’t stop there. OpenOrch is also an orchestrator, a reverse proxy, an ORM, an AI platform, a user management tool, and much more. It brings together a suite of essential tools to streamline your backend development, enabling you to build and deploy powerful applications with ease.

Whether you’re managing AI models, creating microservices, or handling user authentication, OpenOrch provides a unified, developer-friendly foundation that adapts to your needs. By eliminating the need to reimplement common functionalities like file uploads and reducing reliance on complex infrastructure components such as secret and configuration management, OpenOrch simplifies setups and accelerates development processes—letting you focus on building, not managing.

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

You can go to `http://127.0.0.1:3901` and log in with username `openorch` and password `changeme` and start using it just like you would use ChatGPT.

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
      slug: "openorch",
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

## CLI

Install `oo` to get started (at the moment you need Go to install it):

```sh
go install github.com/openorch/openorch/cli/oo@latest
```

```sh
$ oo env add local http://127.0.0.1:58231

$ oo env ls
ENV NAME   SELECTED   URL                           DESCRIPTION     
local      *          http://127.0.0.1:58231 
```

```sh
$ oo login openorch changeme

$ oo whoami
slug: openorch
id: usr_e9WSQYiJc9
roles:
- user-svc:admin
```

```sh
$ oo post /prompt-svc/prompt --sync=true --prompt="Is a cat an animal? Just answer with yes or no please."
{
  "prompt": null,
  "answer": " Yes. A cat is an animal.\n\nTable of Contents\n\n## What is considered an animal in science?\n\nIn science, an animal is a multicellular, eukaryotic organism of the kingdom Animalia. Its body plan is characterized by a segmented body and a nervous system with a centralized brain, which coordinates all the actions of the organism’s body. Animals are multicellular organisms that are characterized by having a complex nervous system and sense organs for perceiving their environment. They are also characterized by having a digestive system that breaks down food externally and internally, and by having a circulatory system that transports nutrients and waste products throughout their body.\n\nCats are animals that belong to the phylum Chordata and the class Mammalia. They have a backbone and a notochord, which are characteristics of chordates, and they are mammals because they have mammary glands that produce milk to feed their young. So, a cat is an animal that belongs to the kingdom Animalia and specifically to the phylum Chordata and the class Mammalia."
}
```

## Context

OpenOrch is a microservices platform that started taking shape in 2013 while I was at Hailo, an Uber competitor. The idea stuck with me and kept evolving over the years – including during my time at [Micro](https://github.com/micro/micro), a microservices framework company. I assumed someone else would eventually build it, but with the AI boom and the wave of AI apps we’re rolling out, I’ve realized it’s time to build it myself.

## Run On Your Servers

See https://openorch.org/docs/category/running-the-daemon to help you get started.

## Services

For articles about the built-in services see https://openorch.org/docs/category/built-in-services.  
For API docs see https://openorch.org/docs/category/openorch-api.

## Run On Your Laptop/PC

We have temporarily discontinued the distribution of the desktop version. Please refer to this page for alternative methods to run the software.

## License

OpenOrch is licensed under AGPL-3.0.
