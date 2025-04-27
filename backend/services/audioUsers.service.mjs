import { bucket } from "../lib/firestore.mjs";
import { v4 as uuidv4 } from "uuid";
import path from "path";

export const subidaAudio = async (localFilePath) => {
  try {
    const randomId = uuidv4();
    const destination = `Audio/Usuarios/${randomId}${path.extname(localFilePath)}`;
    await bucket.upload(localFilePath, {
      destination: destination,
      metadata: {
        contentType: "audio/mpeg",
      },
    });
    console.log("Archivo subido exitosamente:", destination);
    return destination; // Devuelve la ruta
  } catch (error) {
    console.error("Error detectado en la subida del archivo:", error);
    throw error;
  }
};

export const eliminarUserAudio = async (pathBucket) => {
  try {
    const file = bucket.file(pathBucket);
    await file.delete();
    console.log("Archivo eliminado exitosamente:", pathBucket);
  } catch (error) {
    console.error("Error dentro del eliminado de audios:", error);
    throw error;
  }
};
