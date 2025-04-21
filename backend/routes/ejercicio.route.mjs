import express from "express";
import rutaProtegida from '../middleware/auth.middleware.mjs';
const router = express.Router();
router.get("/ejercicio/:id", rutaProtegida, getEjercicio);
router.post("/ejercicio/:id", rutaProtegida,  ejercicioContestado);

export default router;