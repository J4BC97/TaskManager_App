import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
//import { DashboardPage } from '../pages/Dashboard';
//import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
      </Routes>
    </Router>
  );
};
//<Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
