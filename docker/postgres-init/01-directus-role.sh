#!/bin/bash
# Crée l'utilisateur "directus", sans droits d'administration,
# propriétaire de la seule base de Luxe Haven.
set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<SQL
CREATE ROLE directus LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE PASSWORD '${DIRECTUS_DB_PASSWORD}';
ALTER DATABASE ${POSTGRES_DB} OWNER TO directus;
ALTER SCHEMA public OWNER TO directus;
SQL
