import { db } from "../lib/firestore.mjs";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

//          FUNCION PARA BUSCAR EL EJERCICIO DENTRO DEL FIREBASE
async function obtenerEjercicio(ejercicioId){
    try {
        const tipo = ejercicioId.split('-')[0];
        const ejercicioRef = doc(db, `Ejercicios${tipo}`, ejercicioId);
        const ejercicioSnap = await getDoc(ejercicioRef);
        if(ejercicioSnap.exists()){
            return ejercicioSnap.data();
        }else{
            throw new Error("El ejercicio no existe");
        }
    } catch (error) {
        console.error("Error al obtener el ejercicio: ", error);
        throw error;
    }
};

/*                          CONTROLADOR PARA LA RUTA DE OBTENER EJERCICIOS DENTRO DEL FRONT                      */
export const getEjercicio = async (req, res) =>{
    const {id:ejercicio} = req.params;
    
    try {
        const ejercicioData = await obtenerEjercicio(ejercicio);
        const {respuestaCorrecta, feedbacke, ...restoDelEjercicio} = ejercicioData;
        return res.status(200).json(restoDelEjercicio);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

