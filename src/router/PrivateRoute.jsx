import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.auth.user); // O el estado que tengas para el usuario
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

