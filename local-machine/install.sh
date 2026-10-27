#!/bin/bash
#
# Prepara una instalación local de ArchiHUB.
#
#   ./install.sh              clona la rama por defecto del backend
#   BACKEND_BRANCH=<rama> ./install.sh
#
# Crea `archihub/.env` a partir de `archihub/.env.bak` con credenciales nuevas.
# Si `archihub/.env` ya existe no se modifica: sus credenciales son las de la
# base de datos ya creada.

set -euo pipefail

cd "$(dirname "$0")"

# ---- archivo .env ----
if [ -f ./archihub/.env ]; then
    echo "archihub/.env ya existe, se conserva"
else
    command -v openssl >/dev/null || { echo "Se necesita openssl para generar las credenciales"; exit 1; }

    cp ./archihub/.env.bak ./archihub/.env

    set_value() {
        sed -i "s|^$1='__GENERATE__'|$1='$2'|" ./archihub/.env
    }

    set_value JWT_SECRET_KEY "$(openssl rand -hex 32)"
    set_value NODE_TOKEN "$(openssl rand -hex 32)"
    set_value MONGO_INITDB_ROOT_PASSWORD "$(openssl rand -hex 24)"
    set_value ELASTIC_PASSWORD "$(openssl rand -hex 24)"
    set_value FERNET_KEY "$(openssl rand -base64 32 | tr '+/' '-_')"

    chmod 600 ./archihub/.env
    echo "archihub/.env creado con credenciales nuevas"
fi

# ---- directorios de datos ----
# Se crean aquí, y no al levantar los contenedores, para que pertenezcan a este
# usuario: Elasticsearch no arranca si su directorio de datos es de root.
for directorio in original temporal userfiles webfiles data/mongodb data/elastic
do
    if [ ! -d "./$directorio" ]; then
        mkdir -p "./$directorio"
        echo "Directorio $directorio creado"
    else
        echo "Directorio $directorio ya existe"
    fi
done

# ---- backend ----
# Se borra y se clona de nuevo. Los plugins que no vienen con el backend deben
# copiarse después en ./archihub/backend/archihub/plugins/.
rm -rf ./archihub/backend

if [ -n "${BACKEND_BRANCH:-}" ]; then
    git clone --branch "$BACKEND_BRANCH" https://github.com/Archihub-App/archihub-backend.git ./archihub/backend
else
    git clone https://github.com/Archihub-App/archihub-backend.git ./archihub/backend
fi

# ---- límites administrativos ----
# Los archivos de límites (archihub/data/geo, ~24 MB) no vienen en el
# repositorio. Si GEO_DATA_ARCHIVE apunta a un .tar.gz con las carpetas
# admin_0, admin_1, ... (una ruta local o una URL https), se instalan en el
# backend antes de construir la imagen; si no, el mapa queda sin límites hasta
# que se carguen.
GEO_DIR=./archihub/backend/archihub/data/geo
if [ -n "${GEO_DATA_ARCHIVE:-}" ]; then
    mkdir -p "$GEO_DIR"
    case "$GEO_DATA_ARCHIVE" in
        https://*)
            curl -fsSL "$GEO_DATA_ARCHIVE" | tar -xz -C "$GEO_DIR" ;;
        *)
            tar -xzf "$GEO_DATA_ARCHIVE" -C "$GEO_DIR" ;;
    esac
    echo "Límites administrativos instalados en $GEO_DIR"
else
    echo "AVISO: no se instalaron límites administrativos (defina GEO_DATA_ARCHIVE)."
    echo "       Sin ellos, /system/geo-load no tiene nada que cargar."
fi
