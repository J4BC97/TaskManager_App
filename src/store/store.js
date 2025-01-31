import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';  // Asegúrate de que la ruta sea correcta

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer  // Asegúrate de que el nombre del reducer sea correcto
  },
});


