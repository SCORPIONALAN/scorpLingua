import express from 'express';
import { signup, login, logout } from '../controllers/users.controller.mjs';
import { verifyToken} from '../middleware/auth.middleware.mjs';

const router = express.Router();

// Rutas públicas
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);



export default router;