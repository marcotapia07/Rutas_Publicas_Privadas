# LAB 12-13

Este proyecto es un servidor de Express.js que proporciona rutas públicas y privadas. Solo los usuarios registrados pueden acceder a las rutas privadas. Utiliza UUID para la generación de identificadores únicos, Bcrypt para el hash de contraseñas, y JSON Server para simular una base de datos.

## Requisitos

- Node.js (versión 12 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio:
    ```sh
    git clone https://github.com/tu_usuario/lab-12-13.git
    cd lab-12-13
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

### Configuración del Servidor

1. Inicia el servidor:
    ```sh
    npm run dev
    ```

El servidor se ejecutará en `http://localhost:3000`.

### Estructura del Proyecto


### Rutas Públicas

- `POST /public/register`: Registra un nuevo usuario.

    **Ejemplo de cuerpo de solicitud:**
    ```json
    {
        "username": "testuser",
        "password": "password123"
    }
    ```

### Rutas Privadas

- `GET /private`: Accede a una ruta privada (requiere autenticación básica).

### Pruebas con Thunder Client

#### Registro de Usuario

1. Abre Thunder Client en Visual Studio Code.
2. Crea una nueva solicitud.
3. Configura la solicitud como `POST` y usa la URL `http://localhost:3000/public/register`.
4. En la pestaña `Body`, selecciona `JSON` y añade los datos del usuario:
    ```json
    {
        "username": "testuser",
        "password": "password123"
    }
    ```
5. Envía la solicitud. Deberías recibir una respuesta que indique que el usuario ha sido registrado correctamente.

#### Acceso a Rutas Privadas

1. Genera la cadena base64 de tus credenciales:
    ```sh
    node
    console.log(Buffer.from('testuser:password123').toString('base64'));
    ```

    El resultado será algo como `dGVzdHVzZXI6cGFzc3dvcmQxMjM=`.

2. Crea una nueva solicitud en Thunder Client.
3. Configura la solicitud como `GET` y usa la URL `http://localhost:3000/private`.
4. Ve a la pestaña `Headers` y añade un nuevo header:
    - **Key**: `Authorization`
    - **Value**: `Basic dGVzdHVzZXI6cGFzc3dvcmQxMjM=`

5. Envía la solicitud. Deberías recibir una respuesta indicando acceso exitoso a la ruta privada.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
