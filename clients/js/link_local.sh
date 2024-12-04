#!/bin/bash

set -e

cd client;
npm install
npm run build;
npm link;
cd ..

cd example;
npm install
npm link @openorch/client;
npm run build
cd ..

cd ../../desktop/workspaces/angular-app/
npm link @openorch/client
cd ../../../clients/js