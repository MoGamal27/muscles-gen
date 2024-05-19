const express = require('express');

const router =express.Router();

const routineController = require('../controllers/routineController');

router.route('/routine')
      .post(routineController.createEvent)  
    .get(routineController.getEvents)

   
router.route('/routine/:id')
      .put(routineController.updateEvent)
      .delete(routineController.deleteEvent)     
