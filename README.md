# Guía de instalación y de uso de ArchiHUB

## Detalles del aplicativo

El sistema ArchiHUB se compone de dos partes principales: un backend y un frontend. El backend, siendo una API, permite que el frontend sea un componente intercambiable. Actualmente, hay una versión del frontend que ejecuta todas las tareas relacionadas con el procesamiento y la gestión del archivo. No obstante, esta configuración no restringe el uso del sistema, ya que se puede desarrollar una interfaz adaptada a las necesidades específicas de cada usuario, dependiendo de sus requerimientos.

En cuanto al backend, opera utilizando una base de datos MongoDB en conjunto con ElasticSearch para indexar el contenido y realizar búsquedas avanzadas. La API se encuentra desarrollada en Python, utilizando Flask como framework, y emplea un gestor de tareas basado en Celery.

## Instalación con Docker

Para facilitar la instalación de la herramienta, existe un [archivo](./local-machine/archihub/docker-compose.yml) de configuración para _docker compose_ que despliega el sistema en una sola máquina. Sin embargo, es recomendable para entornos colaborativos o de producción hacer el despliegue de la herramienta en varias máquinas. Los detalles de una instalación así se encuentran en la [documentación oficial](https://archihub-app.github.io/archihub.github.io/).

## Guías de instalación y uso del aplicativo

Para instalar la herramienta debes seguir los pasos indicados en la [documentación oficial](https://archihub-app.github.io/archihub.github.io/) en la sección **Empieza ahora**.

En cuanto al uso del aplicativo, te recomendamos revisar las [guías en video](https://www.youtube.com/watch?v=XrH0VRjUpys&list=PLzh6tCpowSeuJ7QOqjVL_lM5ASIcBdQXu) para el uso de ArchiHUB.
