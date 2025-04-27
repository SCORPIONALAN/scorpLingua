import { db } from "../lib/firestore.mjs";

// FUNCIÓN PARA BUSCAR EL EJERCICIO EN FIREBASE USANDO ADMIN SDK
async function obtenerEjercicio(ejercicioId) {
    try {
        const tipo = ejercicioId.split('-')[0];
        const ejercicioDoc = await db.collection(`Ejercicios${tipo}`).doc(ejercicioId).get();

        if (ejercicioDoc.exists) {
            return ejercicioDoc.data();
        } else {
            throw new Error("El ejercicio no existe");
        }
    } catch (error) {
        console.error("Error al obtener el ejercicio: ", error);
        throw error;
    }
}

// CONTROLADOR PARA LA RUTA DE OBTENER EJERCICIOS EN EL FRONTEND
export const getEjercicio = async (req, res) => {
    const { id: ejercicio } = req.params;
    
    try {
        const ejercicioData = await obtenerEjercicio(ejercicio);
        const { respuestaCorrecta, feedbacke, ...restoDelEjercicio } = ejercicioData;
        return res.status(200).json(restoDelEjercicio);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
