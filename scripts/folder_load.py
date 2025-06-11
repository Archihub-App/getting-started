import requests
import json
import datetime
import os
import argparse
import dotenv

dotenv.load_dotenv()

key = os.getenv('ARCHIHUB_API_KEY')

api_url = os.getenv('ARCHIHUB_API_URL')
headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key}

def modify_dict(d, path, value):
    keys = path.split('.')
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

def get_resource(ident):
    url = api_url + '/get_id'
    r = requests.post(url, json={'ident': ident}, headers=headers)
    if r.status_code == 200:
        return json.loads(r.text)
    else:
        return None

def folder_load(carpeta, default_type, main_type, original = False, parents = False, publish = False, avoid = False):
    url = api_url + '/create'

    nombre = os.path.basename(carpeta.rstrip(os.sep))
    ruta = os.path.dirname(carpeta)

    # si existe el archivo nombre.txt en la carpeta, se lee el contenido y se guarda en type
    try:
        ruta = os.path.join(ruta, nombre + '.txt')
        with open(ruta, 'r', encoding='utf-8') as f:
            type = f.read()
    except:
        type = default_type

    payload = {}
    modify_dict(payload, 'metadata.firstLevel.title', nombre)
    modify_dict(payload, 'post_type', type)
    payload['filesIds'] = []

    ident = datetime.datetime.now().strftime('%Y%m%d%H%M%S%f')
    modify_dict(payload, 'ident', ident)


    if parents:
        payload['parents'] = parents
        payload['parent'] = parents
    if publish:
        payload['status'] = 'published'


    form = []
    form.append(('data', (None, json.dumps(payload), 'application/json')))
    if not original:
        r = requests.post(url, files=form, headers={'Authorization': 'Bearer ' + key})
        print(r.json())
        resource = get_resource(ident)
    else:
        print("Skiping Original folder")
        resource = parents[0]

    if resource:
        parents = [resource]
        num_children = len(os.listdir(carpeta))
        folder_num = 0
        files_num = 0
        hasOriginalFolder = False
        for file_name in os.listdir(carpeta):
            if os.path.isdir(os.path.join(carpeta, file_name)):
                if avoid:
                    foldertoavoid = avoid.split(',')
                    if file_name in foldertoavoid:
                        print("Avoiding folder: " + file_name)
                        hasOriginalFolder = True


        # iterar en las carpetas de la carpeta
        for file_name in os.listdir(carpeta):
            file_path = os.path.join(carpeta, file_name)
            
            if os.path.isdir(file_path):
                folder_num += 1
                if hasOriginalFolder and file_name == 'Original':
                    folder_load(file_path, default_type, main_type, True, parents, publish)
                elif not hasOriginalFolder:
                    folder_load(file_path, default_type, main_type, False, parents, publish)
            else:
                if not file_name.endswith('.txt'):
                    files_num += 1
                    nombre = file_name.split('.')[0]
                    payload = {}
                    modify_dict(payload, 'metadata.firstLevel.title', nombre)
                    modify_dict(payload, 'post_type', 'unidad-documental')
                    modify_dict(payload, 'ident', datetime.datetime.now().strftime('%Y%m%d%H%M%S%f'))
                    payload['parent'] = parents
                    payload['parents'] = parents
                    if publish:
                        payload['status'] = 'published'

                    payload['filesIds'] = [{
                                            'file': 0,
                                            'filetag': 'archivo'
                                        }]

                    file_path = os.path.join(carpeta, file_name)
                    form = []
                    form.append(('files', (file_name, open(file_path, 'rb'))))
                    form.append(('data', (None, json.dumps(payload), 'application/json')))

                    r = requests.post(url, data={**payload}, files=form, headers={'Authorization': 'Bearer ' + key})

parser = argparse.ArgumentParser(description='Load recursively a folder to Archihub')
parser.add_argument('--folder', help='Folder to load recursively to Archihub', required=True)
parser.add_argument('--default_type', help='Default type for the resources', required=True)
parser.add_argument('--main_type', help='Main type for the resources', required=True)
parser.add_argument('--publish', help='Publish the folder after loading', default=False)
parser.add_argument('--avoid', help='Folders to skip', default=False)
args = parser.parse_args()


folder_load(args.folder, args.default_type, args.main_type, False, False, args.publish, args.avoid)