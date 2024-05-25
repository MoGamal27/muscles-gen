const asyncHandler = require('express-async-handler');
const Event = require('../models/routine');
const httpStatusText = require('../utils/httpStatusText')
const mongoose = require('mongoose');

const createEvent = asyncHandler(async (req, res) => {
  const { title, start, allDay, user} = req.body;

  if (!title || !start) {
    res.status(400).json({ message: 'Title and start date are required' });
   
  }

  const event = new Event({
    title,
    start,
    allDay,
    user,
  });

  const createdEvent = await event.save();
  res.status(201).json(createdEvent);



});



const getEvents = asyncHandler(async (req, res) => {
     
 
  const events = await Event.find({user: req.query.user});
  res.status(200).json({status: httpStatusText.SUCCESS, data: {events: events}})
})


const deleteEvent = asyncHandler(async (req, res) => {

  
  //const userId = req.query.user;
  const { id } = req.query;
  try {
    await Event.findByIdAndDelete(id);
    res.status(204).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
});

module.exports = { createEvent, getEvents, deleteEvent };
