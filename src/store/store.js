import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';  // Asegúrate de que la ruta sea correcta

export const store = configureStore({
  reducer: {
    auth: authReducer,  // Asegúrate de que el nombre del reducer sea correcto
  },
});


