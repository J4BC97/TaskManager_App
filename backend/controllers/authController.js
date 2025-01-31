import bcrypt from 'bcryptjs';  // Para encriptar las contraseñas
import jwt from 'jsonwebtoken';  // Para generar los tokens JWT
import User from '../models/User.js';  // Importamos el modelo de usuario

// Función para registrar un nuevo usuario
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Verificar si el usuario ya existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  // Encriptar la contraseña antes de guardarla
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear un nuevo usuario
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // Guardar el usuario en la base de datos
  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: savedUser,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar el usuario', error: err });
  }
};

// Función para iniciar sesión (login) y generar un token JWT
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario existe
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Usuario no encontrado' });
  }

  // Verificar si la contraseña es correcta
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Contraseña incorrecta' });
  }

  // Generar el token JWT
  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.JWT_SECRET_KEY, // Se recomienda tener la clave en un archivo de variables de entorno
    { expiresIn: '1h' } // El token expirará en 1 hora
  );

  // Enviar el token y los datos del usuario
  res.json({
    message: 'Inicio de sesión exitoso',
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};