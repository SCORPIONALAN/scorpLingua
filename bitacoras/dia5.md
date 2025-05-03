# Scorplingua - App en Flutter

Este repositorio contiene el desarrollo de nuestra aplicación Flutter. Desde el inicio del proyecto se definieron los estilos visuales y la organización del código para asegurar consistencia y escalabilidad a lo largo del desarrollo.

## 🎨 Diseño y Temas

Establecimos nuestra paleta de colores, estilos de botones y tipografías desde el inicio. La fuente principal utilizada es **Raleway**. Los colores se basan en los colores institucionales de nuestra universidad: **naranja** y **gris**, con acentos en **morado** y **dorado**.

Para consultar la definición exacta de los temas (colores, estilos y tipografías), visita el siguiente archivo:
[app_theme.dart](../scorplingua/lib/core/theme/app_theme.dart)

## 🗂️ Organización de Carpetas

Una buena estructura de carpetas mejora la mantenibilidad del proyecto. Nuestra estructura principal es la siguiente:

- `core/`: Contiene configuraciones esenciales como las opciones de Firebase, temas y validadores de formularios (futuros).
- `features/`: Aquí se agrupan las funcionalidades principales de la app como:
  - **Login**
  - **Signup**
  - **Verificación de correo**
  - **Recuperación de contraseña**
- `screens/`: Almacena las pantallas (UI) que se presentan en la app.
- `main.dart`: Archivo principal que inicializa la aplicación.
- `wrapper.dart`: Controla el enrutamiento inicial dependiendo del estado del usuario (login, registro, recuperación).

## 🔐 Autenticación

Para implementar la autenticación nos basamos en la documentación oficial de **Firebase Auth** y en recursos adicionales de YouTube.

Se incorporó la dependencia **get** (de los creadores de GetX), que proporciona:
- Enrutamiento
- Manejo de estados globales
- Diálogos y popups
- Facilidad para el desarrollo general

## 🔐 Autenticación

La autenticación del usuario se implementó utilizando **Firebase Auth**, apoyándonos en la documentación oficial y recursos audiovisuales. También integramos la librería **get**, que facilita el enrutamiento, el manejo de estado y la interfaz de usuario.

Las funcionalidades actuales del sistema de autenticación incluyen:

### 🧑‍💼 Login (`login.dart`)

Permite al usuario iniciar sesión con su correo y contraseña.

- Valida campos vacíos y formato de correo.
- Muestra mensajes de error claros con `Get.snackbar`.
- Si las credenciales son correctas, se autentica al usuario en Firebase.

### 📝 Registro (`signup.dart`)

Permite registrar un nuevo usuario.

- Verifica que los campos estén completos.
- Asegura que las contraseñas coincidan y tengan al menos 6 caracteres.
- Si el registro es exitoso, redirige al `Wrapper`.

### 📩 Verificación de correo (`verifyEmail.dart`)

Se muestra tras el registro para verificar la cuenta.

- Envía automáticamente un enlace de verificación al correo del usuario.
- Informa al usuario que debe verificar su correo.
- Tiene un botón para "refrescar" y comprobar si ya se verificó.
- Redirige a `HomePage` si el correo ya fue validado.

### 🔄 Recuperación de contraseña (`forgot.dart`)

Función para cuando un usuario olvida su contraseña.

- Solicita el correo del usuario.
- Envía un enlace de restablecimiento de contraseña vía correo electrónico.
- Redirige al `Wrapper` una vez enviado el correo.

### 🔁 Wrapper de autenticación (`wrapper.dart`)

Controla la navegación según el estado del usuario.

- Si el usuario está autenticado y su correo verificado, entra a `HomePage`.
- Si no ha verificado su correo, se muestra la pantalla de verificación.
- Si no hay sesión activa, se muestra el `Login`.


Esta librería ha sido clave para mantener un código limpio y eficiente.

