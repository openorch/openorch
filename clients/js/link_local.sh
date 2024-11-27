#!/bin/bash

set -e

cd client;
npm install
npm run build;
npm link;
cd ..

cd client-example;
npm install
npm link @superplatform/client;
npm run build
cd ..

cd ../../desktop/workspaces/angular-app/
npm link @superplatform/client
cd ../../../clients/js