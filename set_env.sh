#!/bin/bash

# Récupérer le chemin absolu du dossier contenant ce script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Chemin vers le fichier JSON de service account (un niveau au-dessus de envs)
CREDENTIAL_PATH="$SCRIPT_DIR/../terraform-service-account.json"

# Vérifie si le fichier existe
if [ -f "$CREDENTIAL_PATH" ]; then
  export GOOGLE_APPLICATION_CREDENTIALS="$CREDENTIAL_PATH"
  echo "✅ Variable GOOGLE_APPLICATION_CREDENTIALS définie : $GOOGLE_APPLICATION_CREDENTIALS"
else
  echo "❌ Fichier d'identifiants non trouvé à : $CREDENTIAL_PATH"
fi
