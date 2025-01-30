import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Si no hay token, redirigir al login
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="container">
      <h1 className="mt-5">Dashboard</h1>
      <p>Bienvenido al Dashboard, donde podrás gestionar tus tareas.</p>
    </div>
  );
};

export default DashboardPage;