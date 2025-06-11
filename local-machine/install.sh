#!/bin/bash

cp ./archihub/.env.bak ./archihub/.env

# directorios a crear
declare -a directorios=("original" "temporal" "userfiles" "webfiles" "data")

# iterar sobre los directorios
for directorio in "${directorios[@]}"
do
    # si el directorio no existe, crearlo
    if [ ! -d "./$directorio" ]; then
        mkdir $directorio
        echo "Directorio $directorio creado"
    else
        echo "Directorio $directorio ya existe"
    fi
done

# en el directorio ./archihub/backend, borrar todo el contenido y clonar el repositorio de backend
rm -rf ./archihub/backend

git clone https://github.com/Archihub-App/archihub-backend.git ./archihub/backend