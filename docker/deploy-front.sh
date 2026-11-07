#!/bin/bash
# Déploie une version du front
set -e

VERSION=$1
IMAGE="ghcr.io/issajaguraga/luxehaven-front:$VERSION"

# Mettre à jour le front, avec retour à l'ancienne version en cas d'échec
docker service update --image $IMAGE --update-failure-action rollback luxehaven_front

# Vérifier que la nouvelle version tourne bien, et pas l'ancienne après un retour arrière
if ! docker service ls --filter name=luxehaven_front | grep -q "$VERSION"; then
  echo "Échec : la version $VERSION n'a pas démarré, Swarm est revenu à la version précédente"
  exit 1
fi

# Vérifier que le site répond
sleep 5
curl --fail --silent --output /dev/null http://localhost
echo "Version $VERSION déployée"
