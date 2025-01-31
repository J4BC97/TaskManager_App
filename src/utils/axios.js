import axios from 'axios';

// Crear una instancia de axios con la configuración base
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',  // Cambia esta URL por la URL de tu servidor backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Configuración para manejar token de autenticación (si está disponible en el localStorage)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  // Obtener el token JWT del localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;  // Agregar el token a las cabeceras
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Configuración para manejar respuestas y errores
axiosInstance.interceptors.response.use(
  (response) => {
    return response;  // Retornar la respuesta si es exitosa
  },
  (error) => {
    // Puedes agregar aquí un manejo de errores global si lo deseas
    if (error.response && error.response.status === 401) {
      // Maneja el error si el token no es válido o ha expirado
      console.error('Sesión expirada. Por favor, inicia sesión nuevamente.');
      // Redirigir al login si es necesario, por ejemplo:
      // window.location.href = '/login';
    }
    return Promise.reject(error);  // Retornar el error
  }
);
