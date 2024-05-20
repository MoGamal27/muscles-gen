const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
  
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }   

})

module.exports = mongoose.model('meals',mealsSchema)
