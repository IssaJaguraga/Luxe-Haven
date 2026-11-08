#!/bin/bash
# Sauvegarde de la base de Luxe Haven
set -e

DOSSIER="/var/backups/luxehaven"
FICHIER="$DOSSIER/luxehaven-$(date +%F).dump"
mkdir -p "$DOSSIER"

# Exporter la base depuis son conteneur
CONTENEUR=$(docker ps -q -f name=luxehaven_db)
docker exec "$CONTENEUR" pg_dump -U postgres -Fc luxehaven > "$FICHIER"
chmod 600 "$FICHIER"

# Garder seulement les sauvegardes des 7 derniers jours
find "$DOSSIER" -name "luxehaven-*.dump" -mtime +7 -delete
