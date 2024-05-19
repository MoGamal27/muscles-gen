const express = require('express');

const router = express.Router();

const calorie = require('../controllers/calorie');


router.route('/calorie')
      .post(calorie.createCalorie)
      
router.route('/calorie')
      .get(calorie.getCalories)       
