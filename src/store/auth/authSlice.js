import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,  // Recupera el token del localStorage si existe
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;  // El payload es el usuario
      state.token = localStorage.getItem('token');  // Guarda el token
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');  // Elimina el token del localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
authSlice.reducer;
