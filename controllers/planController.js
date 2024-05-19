const asyncHandler = require('express-async-handler');
const Plan = require('../models/plan');

const getPlans = asyncHandler(async (req, res) => {

    const plans = await Plan.find({});

    res.status(200).json({status: httpStatusText.SUCCESS, data: {plans: plans}})
    

})

const postPlans = asyncHandler(async (req, res) => {

    const {name, price, billingCycle, features} = req.body;
    const plan = new Plan({
        name,
        price,
        billingCycle,
        features
    });
    const createdPlan = await plan.save();
    res.status(201).json(createdPlan);
})

module.exports = {
    getPlans,
    postPlans
      
}
