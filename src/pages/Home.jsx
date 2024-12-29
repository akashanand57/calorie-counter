import React from 'react';
import FoodLogForm from '../components/FoodLogForm';
import CalorieList from '../components/CalorieList';

const Home = () => {
  return (
    <div className="p-4">
      <FoodLogForm />
      <CalorieList />
    </div>
  );
};

export default Home;
