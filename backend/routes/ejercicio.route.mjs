import express from "express";
import rutaProtegida from '../middleware/auth.middleware.mjs';
import { getEjercicio } from "../controllers/ejercicios.controller.mjs";
const router = express.Router();
router.get("/:id", getEjercicio);
// , rutaProtegida cuando ya tenga la parte de los tokens
// router.post("/ejercicio/:id", rutaProtegida,  ejercicioContestado);

export default router;