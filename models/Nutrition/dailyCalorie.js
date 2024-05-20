const mongoose = require('mongoose');

const dailyCalorieSchema = new mongoose.Schema({
  
    calorie: {
        type: Number,
        required: true
    },

    goal: {
        type: String,
        required: true,
        enum: ['Lose weight','Gain weight']
    }
   
});

module.exports = mongoose.model('dailyCalorie', dailyCalorieSchema)