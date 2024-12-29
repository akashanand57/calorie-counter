import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  log: [],
};

const calorieSlice = createSlice({
  name: 'calorie',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.log.push(action.payload);
    },
    removeEntry: (state, action) => {
      state.log = state.log.filter(entry => entry.id !== action.payload);
    },
  },
});

export const { addEntry, removeEntry } = calorieSlice.actions;

export default calorieSlice.reducer;
