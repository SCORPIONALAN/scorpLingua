// middlewares/auth.middleware.mjs
import { admin } from '../lib/firestore.mjs';

export const verifyToken = async (req, res, next) => {
  try {

    // Verificar si hay un token en la cabecera Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado o formato incorrecto' });
    }

    // Obtener el token sin el prefijo "Bearer "
    const token = authHeader.split(' ')[1];
    console.log(token);
    // Verificar el token con Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Añadir el usuario al objeto de solicitud para uso posterior
    req.user = {
      userId: decodedToken.uid,
      email: decodedToken.email,

    };
    
    // Continuar con la siguiente función en la cadena de middleware
    next();
  } catch (error) {
    console.error('Error al verificar token:', error);
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

