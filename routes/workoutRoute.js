const express = require('express');

const router = express.Router();

const workoutController = require('../controllers/workoutController');

router.route('/workout')
       .get(workoutController.getWorkout)
      
router.route('/workout/cardio')
       .get(workoutController.getCardio)
  router.route('/workout/cardio')
        .post(workoutController.postCardio)     

 router.route('/workout/calisthenics')
       .get(workoutController.getCalisthenics)
       .post(workoutController.postCalisthenics)
       
router.route('/workout/mobility')
       .get(workoutController.getMobility)
       .post(workoutController.postMobility)


module.exports = router       
