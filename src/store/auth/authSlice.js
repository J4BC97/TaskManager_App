import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer; // Asegúrate de que este es el export correcto
