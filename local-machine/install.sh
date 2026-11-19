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
# repositorio. Se instalan en el backend antes de construir la imagen, desde
# uno de dos orígenes:
#
#   GEO_DATA_ARCHIVE=<ruta o URL https de un .tar.gz>   un archivo propio
#   (sin definir)   se ofrecen los de GEO_SHAPES_SERVER, la URL del API de una
#                   instancia de ArchiHUB con el plugin geoShapes activo (por
#                   defecto la instancia pública de BITSOL; vacío para no
#                   ofrecerlos); se pregunta antes de descargar, o se responde
#                   con DESCARGAR_LIMITES=si|no.
#
# Sin límites, el mapa queda vacío hasta que se carguen con /system/geo-load.
GEO_DIR=./archihub/backend/archihub/data/geo
GEO_SHAPES_SERVER="${GEO_SHAPES_SERVER-https://archihub.bit-sol.com.co/api}"

instalar_limites() {
    mkdir -p "$GEO_DIR"
    tar -xzf "$1" -C "$GEO_DIR"
    echo "Límites administrativos instalados en $GEO_DIR"
}

ofrecer_limites() {
    local info sha256 tamano respuesta archivo

    if ! info=$(curl -fsS "$GEO_SHAPES_SERVER/geoShapes/public/info"); then
        echo "AVISO: $GEO_SHAPES_SERVER no ofrece límites administrativos."
        return 1
    fi
    sha256=$(echo "$info" | sed -n 's/.*"sha256": *"\([0-9a-f]\{64\}\)".*/\1/p')
    tamano=$(echo "$info" | sed -n 's/.*"size": *\([0-9]*\).*/\1/p')
    [ -n "$sha256" ] && [ -n "$tamano" ] || { echo "AVISO: respuesta inesperada de $GEO_SHAPES_SERVER."; return 1; }

    respuesta="${DESCARGAR_LIMITES:-}"
    if [ -z "$respuesta" ]; then
        [ -t 0 ] || return 1    # sin terminal no hay a quién preguntar
        read -r -p "¿Descargar los límites administrativos de ArchiHUB ($((tamano / 1048576 + 1)) MB)? [s/N] " respuesta
    fi
    [[ "$respuesta" =~ ^[sS] ]] || return 1

    archivo=$(mktemp)
    if curl -fsSL -o "$archivo" "$GEO_SHAPES_SERVER/geoShapes/public/download" \
        && echo "$sha256  $archivo" | sha256sum -c --quiet -; then
        instalar_limites "$archivo"
        rm -f "$archivo"
    else
        rm -f "$archivo"
        echo "AVISO: la descarga falló o no coincide con su suma SHA-256; no se instaló nada."
        return 1
    fi
}

if [ -n "${GEO_DATA_ARCHIVE:-}" ]; then
    case "$GEO_DATA_ARCHIVE" in
        https://*)
            archivo=$(mktemp)
            curl -fsSL -o "$archivo" "$GEO_DATA_ARCHIVE"
            instalar_limites "$archivo"
            rm -f "$archivo" ;;
        *)
            instalar_limites "$GEO_DATA_ARCHIVE" ;;
    esac
elif [ -z "$GEO_SHAPES_SERVER" ] || ! ofrecer_limites; then
    echo "AVISO: no se instalaron límites administrativos."
    echo "       Sin ellos, /system/geo-load no tiene nada que cargar."
fi
