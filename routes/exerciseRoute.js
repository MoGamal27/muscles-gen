const express = require('express');

const router = express.Router();

const exerciseController = require('../controllers/exerciseController');

router.route('/exercise')
       .post(exerciseController.createExercise)
 router.route('/exercise')
       .get(exerciseController.getExerciseByUser, exerciseController.getExercise)


 router.route('/exercise')
       .put(exerciseController.updateExercise)

router.route('/exercise/:id')
       .delete(exerciseController.deleteExercise)

router.route('/records')
       .get(exerciseController.getRecords)


  module.exports = router
  
  