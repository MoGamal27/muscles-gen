const mongoose = require('mongoose');

const calorieSchema = new mongoose.Schema({
    age:{
        type: Number,
        required: true
    },
   gender:{
       type: String,
       required: true
   },
   weight:{
       type: Number,
       required: true
   },
   height:{
       type: Number,
       required: true
   },
   activity:{
       type: String,
       required: true,
       enum: ['Sedentary (little or no exercise)', 'Lightly active (light exercise/sports 1-3 days/week)', 'Moderately active (moderate exercise/sports 3-5 days/week)', 'Very active (hard exercise/sports 6-7 days a week)', 'Extra active (very hard exercise/sports & physical job or 2x training)']
   },

   bmr: { type: Number, required: true },
    caloricNeeds: {
        maintain: { type: Number, required: true },
        lose: { type: Number, required: true },
        gain: { type: Number, required: true }
    },
    bmi: { type: Number, required: true },
    status: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },

})

module.exports = mongoose.model('calorie', calorieSchema)