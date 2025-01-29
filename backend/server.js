import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

app.use('/api/tasks', taskRoutes);

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware para JSON
app.use(cors()); // Permitir solicitudes desde el frontend

// Rutas
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));