const mongoose = require('mongoose')

const calisthenicsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: [{ type: String }],

   img: {
       type: String,
       required: true
   }
})

module.exports = mongoose.model('calisthenics', calisthenicsSchema)