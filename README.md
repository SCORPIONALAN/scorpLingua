
# 🦂 scorpLingua

**scorpLingua** es una aplicación móvil desarrollada con **Flutter** para facilitar el aprendizaje del idioma inglés de forma interactiva y accesible. Este proyecto nace en la **Facultad de Estudios Superiores Aragón** con el objetivo de apoyar el autoaprendizaje y el reforzamiento de lenguas extranjeras, principalmente para la comunidad universitaria.

---

## 📌 Descripción General

scorpLingua busca ser una herramienta moderna, flexible y escalable para el aprendizaje de idiomas, combinando lo mejor del desarrollo móvil y de servidores en la nube.

### 🔧 Tecnologías clave:
- **Frontend:** Flutter (solo como consumidor de datos)
- **Backend:** Node.js + Express
- **Base de Datos:** Firebase
- **Almacenamiento:** Buckets de FireBase
- **Despliegue:** Render.com o en firebase para el backend y en play store para nuestra app
- **Comunicación:** REST + WebSockets
- **IA Integrada:** OpenAI (para chat educativo, feedback y más)

---

## ⚙️ Arquitectura del Proyecto

### 🖼 Frontend - Flutter
- Estructura basada en patrón **MVC**
- Widgets personalizados para ejercicios interactivos (drag & drop, quizzes, etc.)
- Modales y animaciones para una experiencia fluida y amigable
- Consumidor de datos provenientes del backend vía `fetch/http`
- Pensado para móvil, pero adaptable para web en versiones futuras

### 🧠 Backend - Node.js
- API RESTful para obtener lecciones, imágenes, videos y más
- WebSockets para chats en tiempo real entre estudiantes y profesores
- Gestión de autenticación con JWT (un dispositivo por cuenta)
- Capacidad para conectar con nuevas APIs educativas y de IA
- Enrutamiento seguro y eficiente

---

## 🚀 Funcionalidades Planeadas

- ✅ Lecciones con texto, imágenes y videos
- 🔄 Correcciones automáticas y modales de feedback
- 🔄 Chat con profesores vía WebSocket
- ✅ Chat con IA para resolver dudas o practicar conversación
- 🔄 Sistema de progreso por usuario
- 🔄 Notificaciones de avance y recordatorios

---

## 📅 Bitácora de Avances

- [Día 1 - Backend / Automatización de scripts para la base de datos 🔥](bitacoras/dia1.md)
- [Día 1 - Backend / Inicio del servidor en NodeJS y algunas rutas ➡️](bitacoras/dia1-avance.md)
- [Día 2 - Frontend / Creacion del proyecto de Flutter🐦](bitacoras/dia2.md)
- [Día 3 - Backend / Creacion de primeros controladores 🎮](bitacoras/dia3.md)

---

## 🎯 Visión a Futuro

El objetivo es que scorpLingua evolucione hacia una plataforma educativa completa:
- Expansión a otros idiomas (francés, alemán, etc.)
- Integración de traducciones en tiempo real
- Plataforma web totalmente funcional
- Generación dinámica de ejercicios según el nivel del usuario
- Espacio colaborativo para estudiantes y docentes

---

## 🙌 Comunidad y Propósito

Este proyecto es **hecho por estudiantes y para estudiantes**. Queremos ofrecer una herramienta útil, moderna y que realmente se sienta como un apoyo en el aprendizaje diario.

¡Vamos a ofrecer lo mejor para nuestra comunidad universitaria! 🧑‍🎓📱🌐
