const express = require('express');

const router = express.Router();

const routineController = require('../controllers/routineController');

router.route('/routine')
      .post(routineController.createEvent)  
      .get(routineController.getEvents)
      
 
        
        
  router.route('/routine')
        .delete(routineController.deleteEvent) 
      
  module.exports = router      
