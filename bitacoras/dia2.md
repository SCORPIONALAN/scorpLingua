
# 🧩 Estructura del Frontend - *scorpLingua*

¡Bienvenido al inicio del desarrollo del frontend de *scorpLingua*! Una vez que el servidor está configurado, nos enfocamos en establecer las bases sólidas de nuestro proyecto Flutter 📱⚙️

Nuestro objetivo inicial es tener **una estructura de carpetas bien organizada**, que nos permita escalar, mantener y desarrollar de forma eficiente.

---

## 📁 Estructura General de Carpetas

```plaintext
lib/
├── app/           # Temas y rutas de navegación
├── config/        # Configuraciones generales y de entornos
├── core/          # Constantes, helpers y servicios reutilizables
├── features/      # Lógica y vistas por módulo/pantalla
├── shared/        # Widgets reutilizables, estilos y extensiones
└── main.dart      # Punto de entrada de la aplicación
```

---

## 🔧 `app/` - Temas y Rutas

Contiene configuraciones globales para:

- `themes/`: Definición del tema visual de la app (modo oscuro, claro, colores, tipografías).
- `routes/`: Definición de rutas y navegación con `GoRouter` o `Navigator`.

---

## ⚙️ `config/` - Configuración Global

Aquí centralizamos configuraciones como:

- Variables de entorno (`dev`, `prod`, etc.).
- Endpoints para consumir desde el backend.
- Configuraciones que puedan cambiar según el entorno.

---

## 🧱 `core/` - Código Base Reutilizable

Estructura base de utilidades comunes:

- `constants/`: Constantes globales (claves, rutas, textos, etc.).
- `helpers/`: Funciones auxiliares y validaciones reutilizables.
- `services/`: Servicios compartidos como autenticación, sockets, manejo de archivos, etc.

---

## 🚀 `features/` - Módulos Funcionales

Cada módulo o pantalla de la app vive en esta carpeta. Cada uno tendrá:

- `data/`: Modelos, llamadas a API, manejo de datos.
- `presentation/`: Vistas y widgets propios del módulo.
- `logic/`: Lógica de estado (`Provider`, `Riverpod`, `Bloc`, etc.).

Ejemplos: `auth/`, `classes/`, `exercises/`, `profile/`, etc.

---

## 🎨 `shared/` - Componentes Reutilizables

Aquí centralizamos lo común entre todos los módulos:

- `widgets/`: Botones personalizados, tarjetas, inputs, etc.
- `styles/`: Estilos globales como bordes, sombras, espaciados.
- `extensions/`: Extensiones útiles (`String.capitalize()`, `BuildContext.screenSize`, etc.).

