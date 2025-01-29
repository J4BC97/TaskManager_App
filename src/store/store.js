import { configureStore } from "@reduxjs/toolkit";
import { authSlice, taskSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        tasks: taskSlice
    },
});
