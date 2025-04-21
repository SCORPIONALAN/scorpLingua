import express from "express";
import rutaProtegida from '../middleware/auth.middleware.mjs';
const router = express.Router();
router.post("/consulta-texto", rutaProtegida, sendMessage);
router.post("/consulta-audio", rutaProtegida, sendAudio);

export default router;