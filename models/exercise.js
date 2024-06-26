const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    time: {
        type: date,
        required: true
    },
    maxVolume: {
        type: Number,
        required: true
    },
    totalReps: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('exercise', exerciseSchema)