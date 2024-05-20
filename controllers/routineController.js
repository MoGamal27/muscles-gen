const asyncHandler = require('express-async-handler');
const Event = require('../models/routine');


const createEvent = asyncHandler(async (req, res) => {
  const { title, start, allDay, user} = req.body;

  if (!title || !start) {
    res.status(400).json({ message: 'Title and start date are required' });
   
  }

  const event = new Event({
    title,
    start,
    allDay,
    user: user || req.user._id,
  });

  const createdEvent = await event.save();
  res.status(201).json(createdEvent);
});


const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ user: req.user._id });
  res.json(events);
});


const deleteEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const event = await Event.findOne({ id, user: req.user._id });

  if (event) {
    await event.remove();
    res.json({ message: 'Event removed' });
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

module.exports = { createEvent, getEvents, deleteEvent };
