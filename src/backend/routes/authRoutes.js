import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const router = express.Router();
const users = []; // Simulación de base de datos

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }
  
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ user, token });
});

