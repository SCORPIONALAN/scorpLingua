# Avances en el Desarrollo de la API - `scorpLingua`

Durante el día de hoy se realizaron avances importantes en el desarrollo de los controladores para las rutas principales de la API. Se trabajó especialmente en las rutas relacionadas con:

- Consultas a la IA.
- Peticiones para obtener contenido teórico.
- Peticiones para acceder a ejercicios.

El objetivo de esta API es facilitar una administración eficiente y una gestión clara de los datos, optimizada para su consumo desde el cliente en Flutter.

---

## 📚 Ruta de Teoría

Se desarrolló el controlador encargado de entregar una clase teórica en función del identificador recibido en la URL. Esta ruta responde únicamente a solicitudes `GET`, ya que no es necesario modificar o agregar contenido, sino simplemente retornar los datos correspondientes a Flutter.

**Ejemplo de ruta:**

```
GET /api/teoria/clase-001
```

> Una vez que la aplicación esté desplegada, por ejemplo en `https://scorpLingua.com`, Flutter deberá consumir esta API a través de autenticación, y acceder dinámicamente a las diferentes rutas disponibles según el contenido que requiera mostrar.

---

## 🧩 Ruta de Ejercicios

También se desarrolló la lógica para obtener ejercicios específicos desde la API. Cada ejercicio está organizado según el tipo de contenido y el número de ejercicio, con una estructura que permite escalar a múltiples colecciones.

**Ejemplo de ruta:**

```
GET /api/ejercicio/Saludos-003
```

**Estructura de la ruta:**

- El prefijo (`Saludos`, `ABC`, etc.) indica la colección en Firestore.
- El sufijo (`003`, `012`, etc.) representa el número del ejercicio.

Este esquema se alinea con la organización en Firestore, donde los documentos siguen el patrón `EjerciciosXYZ` y contienen entradas del tipo `XYZ-001`, `XYZ-002`, etc. Dentro del controlador, se realiza un `split` por guión para extraer el identificador de la colección y así consultar el documento correspondiente.

---

## 🤖 Ruta de ChatIA (Whisper API)

Se comenzaron pruebas básicas con el modelo **Whisper** de OpenAI para realizar transcripción de audio. Actualmente:

- Se utilizan audios de prueba almacenados localmente en la carpeta `/media`.
- La funcionalidad se encuentra en etapa estática para pruebas con Postman.
- Se contempla en el futuro una implementación más dinámica usando **Firebase Storage** u otro sistema de almacenamiento de archivos.

Aunque se consideró implementar un modelo convolucional propio para análisis de voz más avanzado (como detección de tonos o patrones de pronunciación), por el momento se optó por limitarse a la transcripción básica como parte del ejercicio.

---

## ✅ Conclusión

El backend de `scorpLingua` sigue avanzando en la dirección correcta. Cada ruta está siendo desarrollada con un enfoque modular, claro y escalable. En cuanto se despliegue la API y se configure correctamente el dominio, el siguiente paso será integrar estas rutas en la aplicación Flutter para comenzar las pruebas end-to-end.
