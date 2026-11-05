#!/bin/bash

# Configuration Google Cloud
PROJECT_ID="luxehaven-project"
ZONE="europe-west1-b"
VM_NAME="luxehaven-dev-vm"
MACHINE_TYPE="e2-micro"

# Vérifier que Google Cloud CLI est disponible
if ! command -v gcloud > /dev/null 2>&1; then
  echo "Erreur : Google Cloud CLI n'est pas installé."
  exit 1
fi

# Vérifier l'accès au projet Google Cloud
if ! gcloud projects describe "$PROJECT_ID" \
  --format="value(projectId)" > /dev/null; then
  echo "Erreur : impossible d'accéder au projet $PROJECT_ID."
  exit 1
fi

# Vérifier si le serveur existe déjà
VM_CHECK=$(gcloud compute instances describe "$VM_NAME" \
  --project="$PROJECT_ID" \
  --zone="$ZONE" \
  --format="value(name)" 2>&1)

STATUS=$?

if [ "$STATUS" -eq 0 ]; then
  echo "Le serveur $VM_NAME existe déjà."
  exit 0
elif [[ "$VM_CHECK" == *"was not found"* ]]; then
  echo "Le serveur $VM_NAME n'existe pas encore."
else
  echo "Erreur lors de la vérification du serveur :"
  echo "$VM_CHECK"
  exit 1
fi

# Demander confirmation avant la création
echo "Projet : $PROJECT_ID"
echo "Serveur : $VM_NAME"
echo "Zone : $ZONE"
echo "Type : $MACHINE_TYPE"

read -r -p "Confirmer la création du serveur ? (oui/non) : " CONFIRMATION

if [ "$CONFIRMATION" != "oui" ]; then
  echo "Création annulée."
  exit 0
fi

# Créer le serveur de développement
echo "Création du serveur $VM_NAME..."

if gcloud compute instances create "$VM_NAME" \
  --project="$PROJECT_ID" \
  --zone="$ZONE" \
  --machine-type="$MACHINE_TYPE" \
  --image-family="ubuntu-2204-lts" \
  --image-project="ubuntu-os-cloud" \
  --boot-disk-size="10GB" \
  --network="luxehaven-vpc" \
  --subnet="luxehaven-subnet" \
  --tags="dev" \
  --no-address \
  --quiet; then

  echo "Serveur $VM_NAME créé avec succès."
else
  echo "Erreur : la création du serveur a échoué."
  exit 1
fi





