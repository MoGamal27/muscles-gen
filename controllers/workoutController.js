const Workout = require('../models/workout');
const Cardio = require('../models/workouts/cardio')
const Calisthenics = require('../models/workouts/calisthenics')
const Mobility = require('../models/workouts/mobility')
const httpStatusText = require('../utils/httpStatusText');
const asyncHandler = require('express-async-handler');


const getWorkout = asyncHandler(async (req, res) => {

    const workout = await Workout.find({});
   
    res.status(200).json({status: httpStatusText.SUCCESS, data: {workout: workout}})
})



const getCardio = asyncHandler(async (req, res) => {

    const cardio = await Cardio.find({});
   
    res.status(200).json({status: httpStatusText.SUCCESS, data: {cardio: cardio}})
})

const postCardio = asyncHandler(async (req, res) => {

  const {title, text, img} = req.body;
  const cardio = new Cardio({
    title,
    text,
    img
  })

  const createdCardio = await cardio.save();
  res.status(201).json(createdCardio);
})

const getCalisthenics = asyncHandler(async (req, res) => {

    const calisthenics = await Calisthenics.find({});
   
    res.status(200).json({status: httpStatusText.SUCCESS, data: {calisthenics: calisthenics}})
})

const postCalisthenics = asyncHandler(async (req, res) => {

  const {title, text, img} = req.body;
  const calisthenics = new Calisthenics({
    title,
    text,
    img
  })
     

  const createdCalisthenics = await calisthenics.save();
  res.status(201).json(createdCalisthenics);
})

const getMobility = asyncHandler(async (req, res) => {

    const mobility = await Mobility.find({});
   
    res.status(200).json({status: httpStatusText.SUCCESS, data: {mobility: mobility}})
})

const postMobility = asyncHandler(async (req, res) => {

  const {title, text, img} = req.body;
  const mobility = new Mobility({
    title,
    text,
    img
  })


  const createdMobility = await mobility.save();
  res.status(201).json(createdMobility);
})



module.exports = {
    getWorkout,
    getCardio,
    postCardio,
    getCalisthenics,
    postCalisthenics,
    getMobility,
    postMobility
}