/*                  LIBRERIAS PARA NUESTRO BACKEND               */
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import routerUsers from './routes/users.route.mjs';
import routerTeoria from './routes/teoria.route.mjs';
import routerEjercicio from './routes/ejercicio.route.mjs';
import routerMensajes from './routes/mensajes.route.mjs';
import routerChatIA from './routes/chatIA.route.mjs';
import routerEstadisticas from './routes/estadisticas.route.mjs';
import {app, server} from './lib/socket.mjs'


/*                  CONFIGURACIONES Y CONSTANTES DE NUESTRO BACKEND              */
dotenv.config();
const PORT = process.env.PORT;
const __dirname = path.resolve();

/*                  MIDDLEWARE PARA EL FUNCIONAMIENTO DEL BACKEND                    */
// Aumentar la capacidad de la subida
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended:true}))
// Parsear futuras cookies de autenticacion
app.use(cookieParser());

/*                  RUTAS                           */
app.use('/api/users', routerUsers);
app.use('/api/teoria', routerTeoria);
app.use('/api/ejercicio', routerEjercicio);
// app.use('/api/mensajes', routerMensajes);
app.use('/api/chatIA', routerChatIA);
// app.use('/api/estadisticas', routerEstadisticas);
server.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
})