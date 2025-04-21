import express from "express";
import rutaProtegida from '../middleware/auth.middleware.mjs';
const router = express.Router();
router.get("/:id", rutaProtegida, getMensaje);
router.post("/madar/:id", rutaProtegida, mandarMensaje);
export default router;