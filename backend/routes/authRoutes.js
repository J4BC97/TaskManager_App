import express from 'express';
import { login, register } from '../controllers/authController.js';
import {authMiddleware} from '../middleware/authMiddleware.js';

export const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Ruta protegida' });
});





