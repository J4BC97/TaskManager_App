import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

export const router = express.Router();

// Ruta protegida de prueba
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Accediste a una ruta protegida', user: req.user });
});

