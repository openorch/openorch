#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

SERVER_DIR="$SCRIPT_DIR/../../server"

cd "$SERVER_DIR"
swag init --parseDependency

cd "$SCRIPT_DIR"
rm -rf *.go
openapi-generator-cli generate -i "$SERVER_DIR/docs/swagger.yaml" -g go -o . --additional-properties generateInterfaces=true
rm -rf api docs go.mod
cp go.mod.template go.mod

bash "$SERVER_DIR/mock_go.sh"

# A hack to fix gopls because it doesn't like lots of client files being regenerated
killall gopls || true
