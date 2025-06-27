import os
import dotenv
import requests
import json
import datetime

# Cargar variables de entorno
dotenv.load_dotenv()
API_KEY = os.getenv('ARCHIHUB_API_KEY')
API_URL = os.getenv('ARCHIHUB_API_URL')
HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {API_KEY}'
}

# Función auxiliar para modificar un diccionario anidado
def modify_dict(d, path, value):
    """
    Modifica un diccionario anidado usando una ruta de claves separadas por puntos.
    Args:
        d (dict): Diccionario a modificar
        path (str): Ruta de claves (ej: 'metadata.firstLevel.title')
        value: Valor a asignar
    """
    keys = path.split('.')
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

# Crear un recurso en la API
def create_resource(nombre, tipo, parentId=None, parent_type=None):
    """
    Crea un recurso en la API y devuelve su tipo e ID.
    Args:
        nombre (str): Nombre del recurso
        tipo (str): Tipo de recurso ('fondo', 'serie', etc.)
        parentId (str, optional): ID del recurso padre
        parent_type (str, optional): Tipo del recurso padre
    Returns:
        tuple: (tipo, id) del recurso creado
    """
    payload = {
        'post_type': tipo,
        'filesIds': [],
        'metadata': {'firstLevel': {'title': nombre}}
    }

    if parentId and parent_type:
        parent_info = {"id": parentId, "post_type": parent_type}
        payload['parent'] = [parent_info]
        payload['parents'] = [parent_info]

    # Preparar datos para la solicitud
    form = [('data', (None, json.dumps(payload), 'application/json'))]
    url = f'{API_URL}/create'

    try:
        response = requests.post(url, data=payload, files=form, headers=HEADERS)
        response.raise_for_status()  # Lanza excepción para códigos de error HTTP
        resp = response.json()
        return resp.get('post_type'), resp.get('id')
    except requests.RequestException as e:
        print(f"Error al crear recurso {nombre}: {e}")
        return None, None

# Crear un archivo en la API
def crear_file(file, parentId, parent_type):
    """
    Crea un archivo en la API con su metadato asociado.
    Args:
        file (str): Ruta del archivo
        parentId (str): ID del recurso padre
        parent_type (str): Tipo del recurso padre
    Returns:
        tuple: (tipo, id) del archivo creado
    """
    if not parentId or not file:
        print(f"Error: {'parentId' if not parentId else 'file'} no proporcionado")
        return None, None

    expanded_path = os.path.expanduser(file)
    nombre = os.path.basename(expanded_path).split('.')[0]
    
    payload = {
        'post_type': 'unidad-documental',
        'metadata': {'firstLevel': {'title': nombre}},
        'ident': datetime.datetime.now().strftime('%Y%m%d%H%M%S%f'),
        'status': 'published',
        'filesIds': [{'file': 0, 'filetag': 'archivo'}]
    }
    
    parent_info = {"id": parentId, "post_type": parent_type}
    payload['parent'] = [parent_info]
    payload['parents'] = [parent_info]

    try:
        with open(expanded_path, 'rb') as f:
            form = [
                ('files', (os.path.basename(expanded_path), f)),
                ('data', (None, json.dumps(payload), 'application/json'))
            ]
            url = f'{API_URL}/create'
            response = requests.post(url, files=form, headers=HEADERS)
            response.raise_for_status()
            resp = response.json()
            print(f'Archivo creado: {nombre}')
            return resp.get('post_type'), resp.get('id')
    except (requests.RequestException, FileNotFoundError) as e:
        print(f"Error al crear archivo {nombre}: {e}")
        return None, None

# Recorrer carpetas y subcarpetas recursivamente
def get_folders(ruta, nivel=0, parentId=None, parent_type=None):
    """
    Recorre carpetas recursivamente y crea recursos para carpetas y archivos.
    Args:
        ruta (str): Ruta de la carpeta a procesar
        nivel (int): Nivel de indentación para visualización
        parentId (str, optional): ID del recurso padre
        parent_type (str, optional): Tipo del recurso padre
    """
    try:
        for nombre in os.listdir(ruta):
            ruta_completa = os.path.join(ruta, nombre)
            indent = '  ' * nivel
            
            if os.path.isdir(ruta_completa):
                print(f'{indent}- Carpeta: {nombre}')
                tipo_subcarpeta = 'serie'
                tipo, id = create_resource(nombre, tipo_subcarpeta, parentId, parent_type)
                if id:  # Solo continuar si se creó el recurso correctamente
                    get_folders(ruta_completa, nivel + 1, id, tipo)
            else:
                print(f'{indent}  * Archivo: {nombre}')
                crear_file(ruta_completa, parentId, parent_type)
    except OSError as e:
        print(f"Error al procesar la carpeta {ruta}: {e}")

# Punto de entrada principal
def main():
    """Función principal que inicia el proceso de creación de recursos."""
    ruta = os.path.expanduser('~/dev/archihub/getting-started/scripts/Assets')
    nombre_directorio = os.path.basename(ruta)
    print(f"Procesando directorio raíz: {nombre_directorio}")
    
    # Crear recurso raíz (fondo)
    tipo, id = create_resource(nombre_directorio, 'fondo')
    if id:
        get_folders(ruta, 0, id, tipo)
    else:
        print("Error al crear el recurso raíz")

if __name__ == "__main__":
    main()