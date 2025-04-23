import { db } from "../lib/firestore.mjs";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
async function obtenerClase(claseId) {
    try {
        const claseRef = doc(db, "clases", `${claseId}`);
        const classSnap = await getDoc(claseRef);
        if(classSnap.exists()){
            return classSnap.data();
        }
        else{
            throw new Error("La clase no existe");
        }
    } catch (error) {
        console.error("Error al obtener la clase:", error);
        throw error;
    }
}
export const getClase = async (req, res) =>{
    const {id:clase} = req.params;
    try {
        const claseData = await obtenerClase(clase);
        return res.status(200).json(claseData);
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};