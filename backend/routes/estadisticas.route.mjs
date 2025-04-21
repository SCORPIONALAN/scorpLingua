import express from "express";
import rutaProtegida from '../middleware/auth.middleware.mjs';
const router = express.Router();
router.get("/aciertos", rutaProtegida, sendMessage);
router.get("/errores", rutaProtegida, sendAudio);
router.get("/estadisticas", rutaProtegida, estadisticas)

export default router;