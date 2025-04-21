import express from "express";
import rutaProtegida from '../middleware/auth.middleware.mjs';
const router = express.Router();
router.get("/Teoria/:id", rutaProtegida, getEjercicio);

export default router;