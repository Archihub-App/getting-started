# Instalación en red

La instalación en red reparte los servicios de ArchiHUB en varias máquinas:

| Máquina | Servicios | Archivos |
| --- | --- | --- |
| Aplicación | Backend, nodo de procesamiento por defecto, frontend y Redis | `appMachine/` |
| Base de datos | MongoDB como _replica set_ | `mongoCluster/` |
| Índice | Elasticsearch | — |
| Nodos de procesamiento (opcional) | Nodos de Celery adicionales, por ejemplo con GPU | `appMachine/` |

Todas las máquinas que corren el backend o nodos de procesamiento deben:

- tener las mismas credenciales y direcciones en su `.env`;
- montar el **mismo almacenamiento** para los archivos (por ejemplo, un recurso NFS), porque un archivo que sube el backend lo procesa un nodo en otra máquina;
- poder llegar a MongoDB, a Elasticsearch, a Redis y al backend de la máquina de aplicación.

Redis no tiene contraseña. Limita con un cortafuegos el acceso a su puerto (6379) a las máquinas de la instalación, y haz lo mismo con MongoDB y Elasticsearch.

## 1. Base de datos

MongoDB se despliega como _replica set_ (por defecto `rs0`). `mongoCluster/` contiene los archivos de _docker compose_ de partida para los miembros del clúster. La base de datos se llama `archihub-<ENVIRONMENT_NAME>` y la crea el aplicativo.

## 2. Índice

Elasticsearch 7.17 en su propia máquina. Si se sirve por HTTPS, copia su certificado de CA en `appMachine/elastic_certs/` e indica su ruta en `ELASTIC_CERT` (ver `.env.bak`).

## 3. Máquina de aplicación

La máquina de aplicación usa el backend y el frontend de la carpeta `local-machine`.

1. Descargar el repositorio y el backend:

   ```bash
   git clone https://github.com/Archihub-App/getting-started
   cd getting-started/local-machine
   ./install.sh
   ```

   El instalador también crea `local-machine/archihub/.env`, que en esta instalación no se usa.

2. Copiar el frontend compilado en `local-machine/archihub/frontend/build` y ajustar `URL_API` en su `public/config.json`, como en la [instalación en una sola máquina](../README.md#instalación-en-una-sola-máquina).

3. Crear la configuración:

   ```bash
   cd ../network/appMachine
   cp .env.bak .env
   ```

   Llenar los valores `__GENERATE__` (el archivo indica cómo generarlos) y las direcciones de MongoDB, Elasticsearch y del almacenamiento compartido. Si habrá nodos de procesamiento en otras máquinas, poner en `REDIS_BIND` la dirección de esta máquina en la red.

4. Levantar los servicios:

   ```bash
   docker compose up -d --build
   ```

Los plugins se instalan en `local-machine/archihub/backend/archihub/plugins/`, cada uno con su propio `.env`, igual que en la instalación en una sola máquina.

## 4. Nodos de procesamiento

Un nodo de procesamiento usa los mismos archivos que la máquina de aplicación, pero solo levanta un nodo de Celery.

1. Preparar la máquina igual que en los pasos 1 y 3 anteriores (el frontend no es necesario), con **el mismo** `.env` y los mismos plugins, incluidos sus `.env`.

2. En el `.env`, apuntar a la máquina de aplicación:

   ```bash
   REDIS_HOST='<dirección de la máquina de aplicación>'
   MASTER_HOST='http://<dirección de la máquina de aplicación>:<BACKEND_PORT>'
   ```

3. Levantar solo el nodo, sin sus dependencias:

   ```bash
   docker compose up -d --build --no-deps celery_worker
   ```

   Para un nodo de las filas `high`, `medium` y `low` (por ejemplo, con GPU para la transcripción automática), descomentar `celery_worker_queues` en `docker-compose.yml` y levantar ese servicio en su lugar:

   ```bash
   docker compose up -d --build --no-deps celery_worker_queues
   ```

El número de tareas simultáneas de cada nodo se ajusta con `CELERYD_CONCURRENCY`.

## Tareas periódicas

Si se usan tareas programadas, descomenta `celery_beat` en **una sola** máquina de toda la instalación. Con más de uno, cada tarea programada se ejecuta una vez por cada planificador.
