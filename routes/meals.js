const express = require('express')

const router = express.Router()

const mealsController = require('../controllers/nutrition')

router.route('/meals')
     .post(mealsController.createMeals)

router.route('/meals')
      .get(mealsController.getMeals)
      
router.route('/meals/:id/grams')
       .post(mealsController.selectedFood)


module.exports = router     