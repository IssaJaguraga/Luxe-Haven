#!/bin/bash

docker run --rm -it \
  -v "$(pwd)":/ansible \
  -v ~/.ssh:/root/.ssh:ro \
  --network host \
  ansible-image "$@"
