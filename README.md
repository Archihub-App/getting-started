# Guía de instalación y de uso de ArchiHUB

## Detalles del aplicativo

El sistema ArchiHUB se compone de dos partes principales: un backend y un frontend. El backend, siendo una API, permite que el frontend sea un componente intercambiable. Actualmente, hay una versión del frontend que ejecuta todas las tareas relacionadas con el procesamiento y la gestión del archivo. No obstante, esta configuración no restringe el uso del sistema, ya que se puede desarrollar una interfaz adaptada a las necesidades específicas de cada usuario, dependiendo de sus requerimientos.

El backend es una API desarrollada en Python con FastAPI. Usa MongoDB como base de datos, Elasticsearch para indexar el contenido y hacer búsquedas avanzadas, y Celery con Redis como gestor de tareas. El frontend es una aplicación Next.js servida detrás de nginx.

## Contenido del repositorio

| Carpeta | Uso |
| --- | --- |
| `local-machine/` | Instalación completa en una sola máquina con _docker compose_. |
| `network/` | Instalación repartida en varias máquinas: aplicación, clúster de MongoDB y nodos de procesamiento. Ver [network/README.md](./network/README.md). |
| `original/`, `webfiles/`, `userfiles/`, `temporal/` | Archivos de la instalación: originales, versiones para la web, resultados de los usuarios y archivos temporales. |
| `ollama/` | Modelos de Ollama, si se usa el servicio opcional de modelos locales. |
| `scripts/` | Utilidades, como la carga masiva de carpetas. |

## Instalación en una sola máquina

Requiere Docker con _docker compose_ y `openssl`.

1. Descargar el repositorio:

   ```bash
   git clone https://github.com/Archihub-App/getting-started
   cd getting-started/local-machine
   ```

2. Ejecutar el instalador:

   ```bash
   ./install.sh
   ```

   Crea `archihub/.env` a partir de `archihub/.env.bak` con credenciales nuevas, crea las carpetas de datos y descarga el backend en `archihub/backend`. Si `archihub/.env` ya existe, no lo modifica. Para descargar una rama concreta del backend: `BACKEND_BRANCH=<rama> ./install.sh`.

3. Revisar `archihub/.env`. Las variables están explicadas en el mismo archivo; las más importantes son:

   - `ENVIRONMENT_NAME`: da nombre a la base de datos y al índice (`archihub-<nombre>`).
   - `BACKEND_PORT`: puerto en el que se publica el backend.
   - `REDIRECT_URL`: dirección pública del frontend, usada en los correos de recuperación de contraseña.

4. Copiar el frontend compilado en `archihub/frontend/build`. Es el contenido de `.next/standalone/` después de ejecutar `npm run build:standalone` en el frontend (`server.js` debe quedar en la raíz de `build`). Luego, en `archihub/frontend/build/public/config.json`, poner en `URL_API` la dirección del backend tal como la ve el navegador, por ejemplo `http://localhost:11000`.

5. Levantar los servicios:

   ```bash
   cd archihub
   docker compose up -d --build
   ```

   El frontend queda disponible en `http://localhost`. La primera vez, el aplicativo pide crear el usuario administrador.

### Servicios

`docker-compose.yml` levanta MongoDB, Elasticsearch, Redis, el backend, un nodo de procesamiento (Celery) para la fila por defecto y el frontend. MongoDB, Elasticsearch y Redis solo se publican en `127.0.0.1`.

El archivo trae comentados otros servicios opcionales:

- `celery_beat`: el planificador de tareas periódicas. Debe haber uno solo en toda la instalación.
- `celery_worker_queues`: un nodo para las filas `high`, `medium` y `low`, que usan algunos plugins (por ejemplo, la transcripción automática), con y sin GPU.
- `archihub_ollama`: modelos de lenguaje locales.

### Plugins

Los plugins se instalan copiando su carpeta en `archihub/backend/archihub/plugins/` y reconstruyendo las imágenes (`docker compose up -d --build`). Las dependencias de cada plugin se instalan durante la construcción.

La configuración de cada plugin va en su propio archivo `.env`, dentro de su carpeta (cada plugin trae un `.env.example`), no en `archihub/.env`. Ese archivo no se incluye en la imagen: los contenedores lo leen de la carpeta de plugins, que se monta en modo de solo lectura, y un cambio en él se aplica al reiniciar los servicios. El código de los plugins que se ejecuta es siempre el de la imagen, así que cualquier otro cambio en un plugin requiere reconstruirla.

### Actualizar

```bash
cd local-machine/archihub/backend
git pull
cd ..
docker compose up -d --build
```

Después de actualizar, conviene regenerar el índice desde la configuración del sistema.

## Instalación en red

Para entornos colaborativos o de producción se recomienda repartir los servicios en varias máquinas. Los pasos están en [network/README.md](./network/README.md).

## Documentación y guías de uso

La documentación completa está en la [documentación oficial](https://archihub-app.github.io/archihub.github.io/), en la sección **Empieza ahora**.

En cuanto al uso del aplicativo, te recomendamos revisar las [guías en video](https://www.youtube.com/watch?v=XrH0VRjUpys&list=PLzh6tCpowSeuJ7QOqjVL_lM5ASIcBdQXu) para el uso de ArchiHUB.
