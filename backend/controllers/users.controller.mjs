import admin from "firebase-admin";
import { db } from "../lib/firestore.mjs"; // tu configuración de firebase-admin
import { getReceiverSocketId, io } from "../lib/socket.mjs";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "Favor de llenar todos los campos" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres" });
  }

  try {
    // Verificar si el usuario ya existe por email
    const userRecord = await admin.auth().getUserByEmail(email).catch(() => null);
    if (userRecord) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Crear el usuario en Firebase Auth
    const newUser = await admin.auth().createUser({
      email,
      password,
      displayName: fullName,
    });

    // Guardar datos adicionales en Firestore
    const userData = {
      fullName,
      email,
      profilePic: "",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection("users").doc(newUser.uid).set(userData);

    res.status(201).json({
      uid: newUser.uid,
      fullName,
      email,
      profilePic: "",
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    res.status(500).json({ message: "Error del servidor al crear usuario" });
  }
};

export const login = async (req, res) => {
  // Firebase maneja login desde el cliente (con Firebase Auth)
  // Aquí podrías validar el token del cliente si quieres restringir acceso (opcional)
  return res.status(400).json({ message: "El login se maneja desde el cliente con Firebase Auth" });
};

export const logout = (req, res) => {
  // Logout se maneja en el cliente eliminando el token
  res.status(200).json({ message: "Sesión cerrada exitosamente desde el cliente" });
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user.uid; // req.user debe estar validado por middleware

    if (!profilePic) {
      return res.status(400).json({ message: "La foto de perfil es obligatoria" });
    }

    // Subir imagen a Cloudinary (si aún lo usas)
    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    // Actualizar en Firestore
    await db.collection("users").doc(userId).update({
      profilePic: uploadResponse.secure_url,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const updatedUser = (await db.collection("users").doc(userId).get()).data();

    res.status(200).json(updatedUser);

    // Emitir evento con socket.io
    io.emit("ImageChange", {
      userId,
      profilePic: updatedUser.profilePic,
    });
  } catch (error) {
    console.error("Error al actualizar perfil:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const uid = req.user.uid; // ya autenticado por Firebase
    const userSnap = await db.collection("users").doc(uid).get();
    if (!userSnap.exists) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json(userSnap.data());
  } catch (error) {
    console.error("Error en checkAuth:", error.message);
    res.status(500).json({ message: "Error del servidor" });
  }
};
