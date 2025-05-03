import express from "express";
import { verifyToken} from '../middleware/auth.middleware.mjs';
import { createImage, sendAudio, sendMessage } from "../controllers/consulta-texto.controller.mjs";
const router = express.Router();
router.post("/consulta-texto", sendMessage);
router.post("/consulta-audio", sendAudio);
router.post("/crea-imagen", createImage)
// Asignar middlewares cuando ya los tenga , rutaProtegida, MiddlewarePrompt,
export default router;