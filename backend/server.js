import express from 'express';
import dotenv from 'dotenv';
import {router} from './routes/authRoutes.js'; // Asegúrate de importar correctamente

dotenv.config();
const app = express();

app.use(express.json()); // Middleware para manejar JSON
app.use('/auth', router); // Usa las rutas de autenticación

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));