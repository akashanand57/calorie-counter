import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeEntry } from '../features/calorieSlice';
import dayjs from 'dayjs';

const CalorieList = () => {
  const log = useSelector((state) => state.calorie.log);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg text-white font-bold mb-4 text-center sm:text-left">Calorie Entries</h2>
      {log.length === 0 ? (
        <p className="text-white text-center">No entries yet!</p>
      ) : (
        <ul className="space-y-4">
          {log.map(({ id, food, calories, date }) => (
            <li
              key={id}
              className="border p-4 rounded shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white"
            >
              <div className="mb-2 sm:mb-0">
                <p className="font-semibold text-center sm:text-left">
                  {food} - <span className="text-blue-600">{calories} cal</span>
                </p>
                <small className="text-gray-500 block text-center sm:text-left">
                  {dayjs(date).format('MMM DD, YYYY')}
                </small>
              </div>
              <button
                onClick={() => dispatch(removeEntry(id))}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 w-full sm:w-auto"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalorieList;
