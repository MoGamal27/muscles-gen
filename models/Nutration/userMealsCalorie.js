const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grams: { type: Number, required: true },
  calories: { type: Number, required: true },
});

const userMealsCalrorieSchema = new mongoose.Schema({
  calorieIntake: { type: Number, required: true },
  goal: { type: String, required: true },
  foods: { type: [foodSchema], required: true },
  totalCalories: { type: Number, required: true },
  remainingCalories: { type: Number, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const userMealsCalorie = mongoose.model('userMealsCalrorie', userMealsCalrorieSchema);

module.exports = userMealsCalorie;


