const Meals = require('../models/Nutrition/meals')

const calculateTotalCalories = (Meals) => {
    let currentCalories = 0;
  
    Meals.forEach((entry) => {
      currentCalories += entry.grams * (entry.calories / 100); 
    });
  
    return currentCalories;
  };
  

  const totalCalories = calculateTotalCalories(Meals);

  module.exports = totalCalories
  