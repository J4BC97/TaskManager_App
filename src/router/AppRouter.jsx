import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignupPage';
import { DashboardPage } from '../pages/DashBoardPage';
import { PrivateRoute } from './PrivateRoute';  // Asegúrate de tener esta ruta

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Rutas protegidas por PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;