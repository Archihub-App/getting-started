"""
Script para cargar recursivamente una estructura de carpetas y archivos en Archihub.

Este script permite:
1. Crear una estructura jerárquica de recursos en Archihub basada en carpetas locales
2. Subir archivos manteniendo la estructura de directorios
3. Opcionalmente publicar los recursos durante la creación

Uso:
    python folder_load.py --folder /ruta/a/la/carpeta [--publish]
"""

# Módulos estándar
import os
import json
import datetime
import argparse

# Módulos de terceros
import dotenv
import requests


# Cargar variables de entorno desde el archivo .env
dotenv.load_dotenv()

# Obtener credenciales de autenticación
key = os.getenv('ARCHIHUB_API_KEY')

# Configurar URL de la API y cabeceras HTTP
api_url = os.getenv('ARCHIHUB_API_URL')
headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key}

def modify_dict(d, path, value):
    """
    Modifica un diccionario anidado usando una ruta de claves con notación de puntos.
    
    Args:
        d (dict): Diccionario a modificar
        path (str): Ruta de claves separadas por puntos (ej: 'metadata.firstLevel.title')
        value: Valor a asignar en la ruta especificada
    
    Ejemplo:
        >>> d = {}
        >>> modify_dict(d, 'metadata.title', 'Mi documento')
        >>> print(d)
        {'metadata': {'title': 'Mi documento'}}
    """
    keys = path.split('.')
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

def create_resource(nombre, tipo, parentId=None, parent_type=None, publish=False):
    """
    Crea un nuevo recurso en Archihub.
    
    Args:
        nombre (str): Nombre del recurso a crear
        tipo (str): Tipo de recurso (ej: 'fondo', 'serie')
        parentId (str, optional): ID del recurso padre. Si es None, se crea un recurso raíz.
        parent_type (str, optional): Tipo del recurso padre.
        publish (bool, optional): Si es True, publica el recurso inmediatamente.
        
    Returns:
        tuple: (tipo_recurso, id_recurso) del recurso creado
        
    Raises:
        Exception: Si hay un error en la creación del recurso
    """
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
        print(f"✅ Carpeta creada exitosamente: {nombre} (ID: {resp.get('id')})")
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
        print(f"   └── ✅ Subcarpeta creada: {nombre} (ID: {resp.get('id')})")
        return resp.get('post_type'), resp.get('id')


def crear_file(file, parentId, parent_type, publish=False):
    """
    Sube un archivo a Archihub y lo asocia a un recurso padre.
    
    Args:
        file (str): Ruta completa al archivo a subir
        parentId (str): ID del recurso padre al que se asociará el archivo
        parent_type (str): Tipo del recurso padre
        publish (bool, optional): Si es True, publica el recurso inmediatamente.
        
    Returns:
        tuple: (tipo_recurso, id_recurso) del archivo subido o None en caso de error
    """
    if not parentId:
        print("❌ Error: No se puede crear un archivo sin ID de carpeta padre")
        return None
    
    if not file:
        print("❌ Error: No se especificó ningún archivo para subir")
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
    resp = r.json()
    print(f"   └── ✅ Archivo subido: {os.path.basename(file)}")
    return resp.get('post_type'), resp.get('id')

    
def get_folders(ruta, nivel=0, parentId=None, parent_type=None, publish=False):
    """
    Recorre recursivamente un directorio y crea recursos en Archihub.
    
    Args:
        ruta (str): Ruta del directorio a procesar
        nivel (int, optional): Nivel de anidamiento actual (para indentación en la salida)
        parentId (str, optional): ID del recurso padre en Archihub
        parent_type (str, optional): Tipo del recurso padre en Archihub
        publish (bool, optional): Si es True, publica los recursos creados
    """
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



# Configuración del parser de argumentos de línea de comandos
parser = argparse.ArgumentParser(description='Carga recursivamente una carpeta en Archihub')
parser.add_argument('--folder', 
                   help='Ruta de la carpeta a cargar recursivamente', 
                   required=True)
parser.add_argument('--publish', 
                   action='store_true',
                   help='Publicar los recursos inmediatamente después de crearlos',
                   default=False)


# Procesar argumentos
args = parser.parse_args()

def main():
    """
    Función principal que orquesta el proceso de carga.
    """
    # Normalizar la ruta y expandir caracteres especiales como ~
    ruta = os.path.normpath(os.path.expanduser(args.folder))
    
    # Validar que la ruta existe
    if not os.path.exists(ruta):
        print(f"❌ Error: La ruta no existe: {ruta}")
        return

    print(f"\n📂 Ruta a procesar: {ruta}")

    # Obtener el nombre del directorio raíz
    if os.path.isfile(ruta):
        nombre_directorio = os.path.basename(os.path.dirname(ruta))
    else:
        nombre_directorio = os.path.basename(ruta)

    print(f"📝 Nombre del directorio raíz: {nombre_directorio}")
    print(f"📌 Publicar recursos: {'Sí' if args.publish else 'No'}")
    print("\n🚀 Iniciando proceso de carga...\n")

    try:
        # Crear el recurso raíz (tipo 'fondo')
        print(f"🔨 Creando recurso raíz: {nombre_directorio}")
        tipo, id_recurso = create_resource(nombre_directorio, 'fondo', publish=args.publish)
        
        # Procesar recursivamente el directorio
        get_folders(ruta, 0, id_recurso, tipo, publish=args.publish)
        
        print("\n✅ ¡Proceso completado con éxito!")
        print(f"   - Recurso raíz creado con ID: {id_recurso}")
        
    except Exception as e:
        print(f"\n❌ Error durante la ejecución: {str(e)}")
        if hasattr(e, 'response') and e.response:
            print(f"   - Respuesta del servidor: {e.response.text}")
        return 1
    
    return 0

if __name__ == "__main__":
    # Ejecutar la función principal
    exit_code = main()
    exit(exit_code if exit_code is not None else 0)