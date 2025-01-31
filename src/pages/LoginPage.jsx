import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth/authSlice';  // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../utils';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });  // Asegúrate de que la URL sea correcta
      const { token, user } = response.data;

      localStorage.setItem('token', token); // Guarda el token en localStorage
      dispatch(login(user));  // Despacha la acción de login con el usuario
      navigate('/dashboard');  // Redirige al usuario al Dashboard después de loguearse
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};




