import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token); // Obtenemos el token del estado global

  return token ? children : <Navigate to="/login" />;
};


