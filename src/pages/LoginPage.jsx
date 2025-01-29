import { useDispatch } from 'react-redux';
import { login as loginService } from '../services/authService';

const handleSubmit = async () => {
  const data = await loginService(username, password);
  dispatch(login(data));
};