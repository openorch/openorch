#!/bin/bash

set -e

if ! command -v rollup > /dev/null; then
  npm install -g rollup
else
  echo "Rollup is already installed."
fi

cd client;
npm run build;
npm link;
cd ..

cd example;
npm link @openorch/client;
npm run build
cd ..

cd ../../desktop/workspaces/angular-app/
npm link @openorch/client
cd ../../../clients/js