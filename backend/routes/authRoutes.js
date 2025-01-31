import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { authMiddleware } from '../middleware';

export const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta protegida para probar la autenticación
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Ruta protegida, autenticación exitosa' });
});



