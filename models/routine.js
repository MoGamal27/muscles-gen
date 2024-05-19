const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      start: {
        type: Date,
        required: true,
      },
      allDay: {
        type: Boolean,
        default: false,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
      }
    });
    
    module.exports = mongoose.model('Event', eventSchema);
