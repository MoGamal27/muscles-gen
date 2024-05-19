const asyncHandler = require('express-async-handler');
const Calorie = require('../models/calorie');
const calculateBMR = require('../utils/calculateBMR');
const calculateCaloricNeeds = require('../utils/calculateCaloricNeeds');


const createCalorie = asyncHandler(async (req, res) => {
    const { age, gender, weight, height, activity } = req.body;

    if (!age || !gender || !weight || !height || !activity) {
        res.status(400).json({ message: 'All fields are required' });
    }

    const bmr = calculateBMR(age, gender, weight, height);
    const caloricNeeds = calculateCaloricNeeds(bmr, activity);

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
        activity,
        bmr,
        caloricNeeds,
        bmi,
        status
    });

    const createdCalorie = await calorie.save();
    res.status(201).json(createdCalorie);
});

const getCalories = asyncHandler(async (req, res) => {
    const calories = await Calorie.find({});
    res.json(calories);
});

module.exports = {
    createCalorie,
    getCalories,
};
