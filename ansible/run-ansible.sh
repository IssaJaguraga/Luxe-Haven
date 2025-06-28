#!/bin/bash

# Script pour exécuter n'importe quelle commande Ansible dans le conteneur

docker run --rm -it \
  -v "$(pwd)":/ansible \
  -v ~/.ssh:/root/.ssh:ro \
  --network host \
  ansible-image "$@"