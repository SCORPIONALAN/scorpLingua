// controllers/clase.controller.mjs
import { admin, db, bucket } from "../lib/firestore.mjs";
import path from 'path';
import { v4 as uuidv4 } from 'uuid'; // Asumiendo que usas uuid para los nombres de archivo


const __dirname = path.resolve();

/*              MODULO PARA TESTEAR LA SUBIDA DE ARCHIVOS                */
export async function subirAudio() {
    const audioUser = await subidaAudio(path.join(__dirname, 'media', 'Recording(9).m4a'));
    console.log(audioUser.destino);
}

export async function bajarAudio(){
    await eliminarUserAudio("Audio/Usuarios/e5c4e03a-8fdc-4c5d-8d7e-c862f4f2f933.m4a");
}
/*                                FIN DEL TESTEO                           */

// Servicios de audio actualizados para Firebase Admin
export const subidaAudio = async (filePath) => {
    try {
        const fileName = `${uuidv4()}${path.extname(filePath)}`;
        const destino = `Audio/Usuarios/${fileName}`;
        
        // Subir el archivo a Firebase Storage usando Admin SDK
        await bucket.upload(filePath, {
            destination: destino,
            metadata: {
                contentType: 'audio/m4a', // Ajusta según el tipo de archivo
            },
        });
        
        return { destino };
    } catch (error) {
        console.error("Error al subir audio:", error);
        throw error;
    }
};

export const eliminarUserAudio = async (filePath) => {
    try {
        // Eliminar archivo de Firebase Storage usando Admin SDK
        await bucket.file(filePath).delete();
        return true;
    } catch (error) {
        console.error("Error al eliminar audio:", error);
        throw error;
    }
};

// Función para obtener una clase usando Firebase Admin
async function obtenerClase(claseId) {
    try {
        console.log("Buscando clase con ID:", claseId);
        // Usando Firebase Admin para obtener el documento
        const claseDoc = await db.collection("clases").doc(claseId).get();
        
        if (claseDoc.exists) {
            return claseDoc.data();
        } else {
            throw new Error("La clase no existe");
        }
    } catch (error) {
        console.error("Error al obtener la clase:", error);
        throw error;
    }
}

export const getClase = async (req, res) => {
    const { id: clase } = req.params;
    try {
        const claseData = await obtenerClase(clase);
        return res.status(200).json(claseData);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};