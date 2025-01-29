import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice ({
    name: 'task', 
});

export const { task } = taskSlice.actions;
