const express = require('express');

const router = express.Router();

const createCalorie = require('../controllers/calorie');


router.route('/calorie')
       .post(createCalorie.createCalorie)
 router.route('/calorie')
       .get(createCalorie.getCalories)      

module.exports = router       