import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  // Leer el header de autorización
  const authHeader = req.headers['authorization'];

  // Verificar que existe
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token no proporcionado o mal formado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verificar el token con tu clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Adjuntar el usuario decodificado al request
    req.user = decoded;

    // Continuar al siguiente middleware o controlador
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

export default verifyToken;
