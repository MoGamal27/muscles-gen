require('dotenv').config();
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const serverless = require('serverless-http');
app.use(cors());
app.use(bodyParser.json());

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
//const mealsRouter = require('./routes/meals');

const userMealsCalorie = require('./models/Nutration/userMealsCalorie')
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
        const  userId  = req.query.user; // Read user ID from request body
        const usermeals = await userMealsCalorie.find({ user: userId });
        res.json(usermeals);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }


    });


    app.get('/', (req, res) => {
      res.send("Hello World")
  })
app.use('/api/users', userRouter)
app.use('/api/workout', workoutRouter)
app.use('/api/plan', planRouter)
app.use('/api/calorie', calorieRouter)
app.use('/api/routine', routineRouter)
//app.use('/api/meals', mealsRouter)




app.listen(4000, () => {
    console.log("Server running on port 4000")
})

//module.exports= serverless(app)