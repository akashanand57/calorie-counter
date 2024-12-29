import { configureStore } from '@reduxjs/toolkit';
import calorieReducer from './features/calorieSlice';

export const store = configureStore({
  reducer: {
    calorie: calorieReducer,
  },
});
