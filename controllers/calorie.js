const asyncHandler = require('express-async-handler');
const Calorie = require('../models/calorie');
const calculateBMR = require('../utils/calculateBMR');
const calculateCaloricNeeds = require('../utils/calculateCaloricNeeds');


const activityMap = {
  1: 'Sedentary (little or no exercise)',
  2: 'Lightly active (light exercise/sports 1-3 days/week)',
  3: 'Moderately active (moderate exercise/sports 3-5 days/week)',
  4: 'Very active (hard exercise/sports 6-7 days a week)',
  5: 'Extra active (very hard exercise/sports & physical job or 2x training)'
};

const createCalorie = asyncHandler(async (req, res) => {
    const { age, gender, weight, height, activity, user } = req.body;

    if (!age || !gender ||  !weight ||  !height ||  !activity) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Convert activity number to corresponding string
    const activityString = activityMap[activity];
    if (!activityString) {
        return res.status(400).json({ message: 'Invalid activity value' });
    }

    const bmr = calculateBMR(age, gender, weight, height);
    const caloricNeeds = calculateCaloricNeeds(bmr, activityString);

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
    let status = '';

    if (bmi < 18.5) status = 'Underweight';
    else if (bmi < 24.9) status = 'Normal weight';
    else if (bmi < 29.9) status = 'Overweight';
    else status = 'Obesity';

    const calorie = new Calorie({
        age,
        gender,
        weight,
        height,
        activity: activityString,
        bmr,
        caloricNeeds,
        bmi,
        status,
        user
    });

    try {
        const createdCalorie = await calorie.save();
        res.status(201).json(createdCalorie);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create calorie document', error: error.message });
    }
});


const getCalories = asyncHandler(async (req, res) => {
    const  userId  = req.query.user; // Read user ID from request body
  const calories = await Calorie.find({ user: userId });
  res.json(calories);
});

module.exports = {
    createCalorie,
    getCalories,
};
