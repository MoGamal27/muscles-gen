require('dotenv').config();
const express = require('express');

const app = express();

const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

mongoose.connect(url).then(() => {
    console.log("MongoDB Connected")
})

app.use(express.json());

const userRouter = require('./routes/authRoute');
const workoutRouter = require('./routes/workoutRoute');
const planRouter = require('./routes/planRoute');
const calorieRouter = require('./routes/calorie');
const routineRouter = require('./routes/routineRoute');
const mealsRouter = require('./routes/meals');

app.use('/api/users', userRouter)
app.use('/api/workout', workoutRouter)
app.use('/api/plan', planRouter)
app.use('/api/calorie', calorieRouter)
app.use('/api/routine', routineRouter)
app.use('/api/meals', mealsRouter)



app.listen(4000, () => {
    console.log("Server running on port 4000")
})

