import express from "express";
import { verifyToken} from '../middleware/auth.middleware.mjs';
import { MiddlewarePrompt } from "../middleware/reqOpenIA.middleware.mjs";
import { sendAudio, sendMessage } from "../controllers/consulta-texto.controller.mjs";
const router = express.Router();
router.post("/consulta-texto", sendMessage);
router.post("/consulta-audio", sendAudio);
// Asignar middlewares cuando ya los tenga , rutaProtegida, MiddlewarePrompt,
export default router;