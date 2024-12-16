#!/bin/bash

set -e

cd client;
npm link;
cd ..

cd example;
npm link @openorch/client;
cd ..

cd ../../desktop/workspaces/angular-app/
npm link @openorch/client
cd ../../../clients/js