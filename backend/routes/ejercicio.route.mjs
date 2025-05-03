import express from "express";
import { verifyToken} from '../middleware/auth.middleware.mjs';
import { getEjercicio } from "../controllers/ejercicios.controller.mjs";
const router = express.Router();
router.get("/:id", verifyToken,getEjercicio);
// , rutaProtegida cuando ya tenga la parte de los tokens
// router.post("/ejercicio/:id", rutaProtegida,  ejercicioContestado);

export default router;