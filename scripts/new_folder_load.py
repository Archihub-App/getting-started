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
import argparse


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
def create_resource(nombre, tipo, parentId=None, parent_type=None, publish=False):
    if not parentId:
        payload = {}
        modify_dict(payload, 'metadata.firstLevel.title', nombre)

        modify_dict(payload, 'post_type', tipo)
        payload['filesIds'] = []
        payload['status'] = 'published' if publish else 'draft'

        # form
        form = []
        form.append(('data', (None, json.dumps(payload), 'application/json')))

        # El recurso en ese folder
        url = api_url + '/create'
        r = requests.post(url, data={**payload}, files=form, headers={'Authorization': 'Bearer ' + key})
        resp = r.json()
        print('create folder: ', resp)
        return resp.get('post_type'), resp.get('id')

    else:
        payload = {}
        modify_dict(payload, 'metadata.firstLevel.title', nombre)

        modify_dict(payload, 'post_type', tipo)
        payload['filesIds'] = []

        parent_info = {"id": parentId, "post_type": parent_type}
        payload['parent'] = [parent_info]
        payload['parents'] = [parent_info]
        payload['status'] = 'published' if publish else 'draft'

        # form
        form = []
        form.append(('data', (None, json.dumps(payload), 'application/json')))

        # El recurso en ese folder
        url = api_url + '/create'
        r = requests.post(url, data={**payload}, files=form, headers={'Authorization': 'Bearer ' + key})
        resp = r.json()
        return resp.get('post_type'), resp.get('id')


def crear_file(file, parentId, parent_type, publish=False):
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
    payload['status'] = 'published' if publish else 'draft'

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
def get_folders(ruta, nivel=0, parentId=None, parent_type=None, publish=False):
    for nombre in os.listdir(ruta):
        ruta_completa = os.path.join(ruta, nombre)
        if os.path.isdir(ruta_completa):
            print('  ' * nivel + f'- {nombre}')
            # Aquí decides el tipo de recurso para la subcarpeta, por ejemplo 'serie'
            tipo_subcarpeta = 'serie' 
            tipo, id = create_resource(nombre, tipo_subcarpeta, parentId, parent_type, publish)
            # Llamada recursiva con el nuevo id y tipo como parent
            get_folders(ruta_completa, nivel + 1, id, tipo, publish)
        else:
            # Es un archivo, lo creamos con crear_file
            print('  ' * (nivel + 1) + f'* {nombre}')
            crear_file(ruta_completa, parentId, parent_type, publish)



# Get arguments
parser = argparse.ArgumentParser(description='Load recursively a folder to Archihub')
parser.add_argument('--folder', help='Folder to load recursively to Archihub', required=True)
parser.add_argument('--publish', help='Publish the folder after loading', default=False)
#parser.add_argument('--main_type', help='Main type for the resources', required=True)
#parser.add_argument('--default_type', help='Default type for the resources', required=True)
#parser.add_argument('--avoid', help='Folders to skip', default=False)
args = parser.parse_args()

# Normalizar la ruta y eliminar la barra final si existe
ruta = os.path.normpath(os.path.expanduser(args.folder))
print(f"Ruta completa: {ruta}")

# Obtener el nombre del directorio
if os.path.isfile(ruta):
    nombre_directorio = os.path.basename(os.path.dirname(ruta))
else:
    nombre_directorio = os.path.basename(ruta)

print(f"Nombre del directorio: {nombre_directorio}")

print(args.publish)
# Crear el recurso raíz
tipo, id = create_resource(nombre_directorio, 'fondo', publish=args.publish)
print('create folder: ', tipo, id)
get_folders(ruta, 0, id, tipo, publish=args.publish)