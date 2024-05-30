const exerciseSchema = require('../models/exercise');
const asyncHandler = require('express-async-handler');
const httpStatusText = require('../utils/httpStatusText');

const createExercise = asyncHandler(async (req, res) => {
    const { user, title, sets, weight, reps, equipment, time  } = req.body;

    if (!title || !sets || !weight || !reps || !equipment || !time) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Calculate max volume and total reps
    const calculateMaxVolume = (sets, weight, reps) => sets * weight * reps;
    const calculateTotalReps = (sets, reps) => sets * reps;

    const maxVolume = calculateMaxVolume(sets, weight, reps);
    const totalReps = calculateTotalReps(sets, reps);

    const exercise = new exerciseSchema({
        user,
        title,
        sets,
        weight,
        reps,
        equipment,
        time,
        maxVolume,
        totalReps
    });

    await exercise.save();

    res.status(201).json({ 
        message: 'Exercise created successfully', 
        exercise: {
            user,
            title,
            sets,
            weight,
            reps,
            equipment,
            time,
            maxVolume,
            totalReps
        } 
    });
});


const getExerciseByUser = asyncHandler(async (req, res) => {

    const  userId  = req.query.user; // Read user ID from request body
    const exercises = await exerciseSchema.find({ user: userId });

    res.status(200).json({status: httpStatusText.SUCCESS, data: {exercises: exercises}})

})

const getExercise = asyncHandler(async (req, res) => {

    const exercise = await exerciseSchema.find({});
   
    res.status(200).json({status: httpStatusText.SUCCESS, data: {exercise: exercise}})
})


const updateExercise = asyncHandler(async (req, res) => {

  const { title, sets, weight, reps, equipment, time, user } = req.body;
  
  const exercise = await exerciseSchema.findOneAndUpdate({user: user}, 
    {title, sets, weight, reps, equipment, time}, 
    {new: true});

  res.status(200).json({status: httpStatusText.SUCCESS, data: {exercise: exercise}})


})


const deleteExercise = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const exercise = await exerciseSchema.findByIdAndDelete(id);
    res.status(200).json({status: httpStatusText.SUCCESS, data: {exercise: exercise}})
})



const getRecords = asyncHandler(async (req, res) => {
    const  userId  = req.query.user; // Read user ID from request body
    const exercises = await exerciseSchema.find({ user: userId });

        // Find the exercise with the maximum volume
        const maxVolumeExercise = exercises.reduce((max, exercise) => {
            return exercise.maxVolume > max.maxVolume ? exercise : max;
        }, exercises[0]);

        const totalReps = exercises.reduce((acc, exercise) => acc + exercise.totalReps, 0);

        res.status(200).json({
            userId,
            maxVolume: maxVolumeExercise.maxVolume,
            totalReps,
            exercise: maxVolumeExercise
        });
    
        res.status(500).json({ message: 'Server Error', error: error.message });
    
});




module.exports = {
    createExercise,
    getExerciseByUser,
    getExercise,
    updateExercise,
    deleteExercise,
    getRecords
}