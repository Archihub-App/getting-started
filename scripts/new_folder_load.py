# iterar desde la carpeta raiz
# cargar cada carpeta usando el default type 
# iterar recursivamente todas las carpetas

# PASO1 crear el recurso de la carpeta raiz  - un Fondo
# PASO2 al crear el recurso el API devuelve el identificador del recurso creado y eso se usa como parent para el siguiente recurso que se crea
# ITERAR recursivamente SOLAMENTE las carpetas por ahora

import os
import dotenv
import requests
import json
import datetime

dotenv.load_dotenv()

key = os.getenv('ARCHIHUB_API_KEY')

api_url = os.getenv('ARCHIHUB_API_URL')
headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key}

# Funciones que crear en el API 
def modify_dict(d, path, value):
    keys = path.split('.')
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

# Esto debe crear el recurso y devolvelo el identificador del recurso creado
def create_resource(nombre, tipo, parentId=None, parent_type=None):
    if not parentId:
        payload = {}
        modify_dict(payload, 'metadata.firstLevel.title', nombre)

        modify_dict(payload, 'post_type', tipo)
        payload['filesIds'] = []

        # form

        form = []
        form.append(('data', (None, json.dumps(payload), 'application/json')))

        # El recurso en ese folder
        url = api_url + '/create'
        r = requests.post(url, data={**payload}, files=form, headers={'Authorization': 'Bearer ' + key})
        resp = r.json()
        return resp.get('post_type'), resp.get('id')

    else:
        payload = {}
        modify_dict(payload, 'metadata.firstLevel.title', nombre)

        modify_dict(payload, 'post_type', tipo)
        payload['filesIds'] = []

        parent_info = {"id": parentId, "post_type": parent_type}
        payload['parent'] = [parent_info]
        payload['parents'] = [parent_info]

        # form
        form = []
        form.append(('data', (None, json.dumps(payload), 'application/json')))

        # El recurso en ese folder
        url = api_url + '/create'
        r = requests.post(url, data={**payload}, files=form, headers={'Authorization': 'Bearer ' + key})
        resp = r.json()
        return resp.get('post_type'), resp.get('id')


def crear_file(file, parentId, parent_type):
    if not parentId:
        print("No se puede crear un archivo sin parentId")
        return None
    
    if not file:
        print("No se puede crear un archivo sin file")
        return None
    
    expanded_path = os.path.expanduser(file)

    nombre = os.path.basename(expanded_path).split('.')[0]
    payload = {}
    modify_dict(payload, 'metadata.firstLevel.title', nombre)
    modify_dict(payload, 'post_type', 'unidad-documental')
    modify_dict(payload, 'ident', datetime.datetime.now().strftime('%Y%m%d%H%M%S%f'))
    
    parent_info = {"id": parentId, "post_type": parent_type}
    payload['parent'] = [parent_info]
    payload['parents'] = [parent_info]
    payload['status'] = 'published'

    payload['filesIds'] = [{
                            'file': 0,
                            'filetag': 'archivo'
                        }]

    form = []
    form.append(('files', (os.path.basename(expanded_path), open(expanded_path, 'rb'))))
    form.append(('data', (None, json.dumps(payload), 'application/json')))

    url = api_url + '/create'
    r = requests.post(url, files=form, headers={'Authorization': 'Bearer ' + key})
    print('create file: ', r.json())
    resp = r.json()
    return resp.get('post_type'), resp.get('id')

    
# Recorrer las carpetas y subcarpetas
# Funcion recursiva que recorre las carpetas y subcarpetas y archivos
def get_folders(ruta, nivel=0, parentId=None, parent_type=None):
    for nombre in os.listdir(ruta):
        ruta_completa = os.path.join(ruta, nombre)
        if os.path.isdir(ruta_completa):
            print('  ' * nivel + f'- {nombre}')
            # Aquí decides el tipo de recurso para la subcarpeta, por ejemplo 'serie'
            tipo_subcarpeta = 'serie' 
            tipo, id = create_resource(nombre, tipo_subcarpeta, parentId, parent_type)
            # Llamada recursiva con el nuevo id y tipo como parent
            get_folders(ruta_completa, nivel + 1, id, tipo)
        else:
            # Es un archivo, lo creamos con crear_file
            print('  ' * (nivel + 1) + f'* {nombre}')
            crear_file(ruta_completa, parentId, parent_type)

ruta = os.path.expanduser('~/dev/archihub/getting-started/scripts/Assets')
nombre_directorio = os.path.basename(ruta)
print(nombre_directorio)
tipo, id = create_resource(nombre_directorio, 'fondo')
get_folders(ruta, 0, id, tipo)
