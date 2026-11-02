#!/bin/bash
# Déploie une version du front. Exemple : deploy-front.sh 640462d2dbf236570d8e7ef9be0caa869d65436c
set -e

VERSION=$1
IMAGE="ghcr.io/issajaguraga/luxehaven-front:$VERSION"

# Mettre à jour le front, avec retour à l'ancienne version en cas d'échec
docker service update --image $IMAGE --update-failure-action rollback luxehaven_front

# Vérifier que le site répond
sleep 5
curl --fail --silent --output /dev/null http://localhost
echo "Version $VERSION déployée"
