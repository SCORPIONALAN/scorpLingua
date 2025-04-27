import { admin, db } from '../lib/firestore.mjs';
import { UserSchema } from '../models/user.models.mjs';

export const signup = async (req, res) => {
  const data = req.body;

  try {
    // Validación por parte del Schema ZOD
    const validated = UserSchema.parse(data);
    console.log(validated);

    // Creación de usuario por parte de Firebase Auth
    const userRecord = await admin.auth().createUser({
      email: validated.email,
      password: validated.password, // Firebase Auth la hasheará
      displayName: validated.username || '',
    });

    // Generar un token para el usuario recién creado
    const firebaseToken = await admin.auth().createCustomToken(userRecord.uid);

    // Guardar información adicional del usuario en Firestore
    const userRef = db.collection('users');
    const userToSave = {
      ...validated,
      userId: userRecord.uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    // Eliminamos campos sensibles antes de guardar
    delete userToSave.password;
    
    const docRef = await userRef.add(userToSave);

    res.status(201).json({
      message: "Usuario correctamente registrado",
      token: firebaseToken, // Incluimos el token
      userId: docRef.id,
      user: {
        email: validated.email,
        name: validated.name || validated.fullName || '',
        uid: userRecord.uid
      },
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Datos inválidos", errors: error.errors });
    }
    console.error("Error al crear usuario:", error);
    res.status(500).json({ 
      message: "Error del servidor",
      error: error.message 
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Verificamos que el usuario exista en Firebase Auth
    const userRecord = await admin.auth().getUserByEmail(email);
    
    // Generar un token personalizado para el usuario
    const firebaseToken = await admin.auth().createCustomToken(userRecord.uid);
    
    // Obtener datos adicionales del usuario desde Firestore
    const userSnapshot = await db.collection('users')
      .where('userId', '==', userRecord.uid)
      .get();
    
    let userData = null;
    if (!userSnapshot.empty) {
      userData = userSnapshot.docs[0].data();
      // Asegurarnos de no enviar información sensible
      if (userData.password) delete userData.password;
    }

    res.status(200).json({
      message: "Token generado exitosamente",
      token: firebaseToken,
      user: {
        email: userRecord.email,
        uid: userRecord.uid,
        ...userData
      },
    });
  } catch (error) {
    console.error("Error al generar token:", error);
    res.status(401).json({ 
      message: "Credenciales inválidas o usuario no encontrado",
      error: error.message 
    });
  }
};

export const logout = async (req, res) => {
  // Firebase Auth maneja los tokens en el cliente
  // En el backend solo confirmamos la acción
  res.status(200).json({ message: "Sesión cerrada exitosamente" });
};