const express = require('express');

const router = express.Router();

const getPlans = require('../controllers/planController');
const postPlans = require('../controllers/planController');
router.route('/plan')
      .get(getPlans.getPlans)
 router.route('/plan')
        .post(postPlans.postPlans)     
      
module.exports = router
