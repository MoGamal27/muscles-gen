const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    billingCycle: { type: String, required: true },
    features: [{ type: String }]
});

module.exports = mongoose.model('Plan', planSchema);
