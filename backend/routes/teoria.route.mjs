import express from "express";
import rutaProtegida from '../middleware/auth.middleware.mjs';
import { getClase } from "../controllers/teoria.controller.mjs";
const router = express.Router();
router.get("/:id", getClase);
// rutaProtegida Cuando ya tenga definido
export default router;