import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (username, password) => {
  const { data } = await axios.post(`${API_URL}/login`, { username, password });
  return data;
};