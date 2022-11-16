// Imports
const mongoose = require('mongoose')


// Create schema of restaurant model
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  place_id: {
    type: Number,
    required: true
  },
  reference: {
    type: String,
    required: true
  }
})

// Export functions
module.exports = mongoose.model('Workout', workoutSchema)