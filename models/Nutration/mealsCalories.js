const mongoose = require('mongoose');

const mealsCaloriesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  food: {
    type: String,
    ref: 'meals',
    required: true
  },
  totalCalories: {
    type: Number,
    required: true
  },
  remainingCalories: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const MealsCalories = mongoose.model('MealsCalories', mealsCaloriesSchema);

module.exports = MealsCalories;
