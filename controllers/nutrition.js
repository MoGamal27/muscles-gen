const asyncHandler = require('express-async-handler');
const Meals = require('../models/Nutrition/meals')

const createMeals = asyncHandler(async (req, res) => {
    const { title, text, calories, img } = req.body;
      
    const meals = new Meals({
        title,
        text,
        calories,
        img
    })

    const createdMeals = await meals.save();
    res.status(201).json(createdMeals);
  }) 


   const getMeals = asyncHandler(async (req, res) => {

    const meals = await Meals.find({});
    
    if(!meals){
      return res.status(404).json({ message: 'Meals not found' });
    }

    res.status(200).json({status: httpStatusText.SUCCESS, data: {meals: meals}})

  })


  const selectedFood = asyncHandler(async (req, res) => { 

    const { id } = req.params;
    const { grams } = req.body;

    const food = await Meals.findById(id);

    if(!food){
      return res.status(404).json({ message: 'Food item not found' });
    }

    const totalCalories = (food.calories / 100) * grams;
    res.status(200).json({ totalCalories });

  })

  module.exports = {
    createMeals,
    selectedFood,
    getMeals
  }