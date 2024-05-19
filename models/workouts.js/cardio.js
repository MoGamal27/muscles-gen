const mongoose = require('mongoose')

const cardioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
       type: String,
       required: true
   },
   img: {
       type: String,
       required: true
   }
})

module.exports = mongoose.model('cardio', cardioSchema)