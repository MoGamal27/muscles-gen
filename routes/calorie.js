const express = require('express');

const router = express.Router();

const createCalorie = require('../controllers/calorie');


router.route('/calorie')
       .post(createCalorie.createCalorie)

module.exports = router       