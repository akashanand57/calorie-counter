import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../features/calorieSlice';
import { nanoid } from 'nanoid';

const FoodLogForm = () => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (food && calories) {
      dispatch(addEntry({ id: nanoid(), food, calories: Number(calories), date: new Date().toISOString() }));
      setFood('');
      setCalories('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 bg-gray-100 p-4 rounded shadow-md max-w-lg mx-auto sm:p-6 md:max-w-2xl lg:max-w-3xl"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Food:</label>
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter food item"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter calories"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
      >
        Add Entry
      </button>
    </form>
  );
};

export default FoodLogForm;
