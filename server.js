require('dotenv').config();
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const userRouter = require('./routes/authRoute');
const workoutRouter = require('./routes/workoutRoute');
const planRouter = require('./routes/planRoute');
const calorieRouter = require('./routes/calorie');
const routineRouter = require('./routes/routineRoute');
const userMealsCalorie = require('./models/Nutration/userMealsCalorie');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // replace with your frontend URL
  optionsSuccessStatus: 200
};

// Enable CORS with options
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// MongoDB Connection
const url = process.env.MONGO_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error('MongoDB connection error:', err));

  const workoutRouter = require('./routes/workoutRoute');
const planRouter = require('./routes/planRoute');
const calorieRouter = require('./routes/calorie');
const routineRouter = require('./routes/routineRoute');
const userMealsCalorie = require('./models/Nutration/userMealsCalorie');
// Routes
app.use('/api/users', userRouter);
app.use('/api/workout', workoutRouter);
app.use('/api/plan', planRouter);
app.use('/',calorieRouter);
app.use('/api/routine', routineRouter);

app.post('/api/foods', async (req, res) => {
  const { calorieIntake, goal, foods, totalCalories, remainingCalories, user } = req.body;
  const usermeals = new userMealsCalorie({
    calorieIntake,
    goal,
    foods,
    totalCalories,
    remainingCalories,
    user
  });

  try {
    await usermeals.save();
    res.status(201).json(usermeals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/api/foods', async (req, res) => {
  try {
    const userId = req.query.user; // Read user ID from query params
    const usermeals = await userMealsCalorie.find({ user: userId });
    res.json(usermeals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/', (req, res) => {
  res.send("Hello World");
});

// Export for serverless
module.exports = app;
module.exports.handler = serverless(app);
