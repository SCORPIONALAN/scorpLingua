import express from "express";
import { verifyToken} from '../middleware/auth.middleware.mjs';
import { bajarAudio, getClase, subirAudio } from "../controllers/teoria.controller.mjs";
const router = express.Router();
router.get("/:id", verifyToken, getClase);
router.post("/audio", subirAudio);
router.delete("/audio", bajarAudio);
// rutaProtegida Cuando ya tenga definido
export default router;