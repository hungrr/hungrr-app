
/*
    NOT FINISHED - JUST A BASIC SKELETON TO BUILD OFF OF
*/

// Imports

const mongoose = require('mongoose')
const Schema = mongoose.Scheme
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('restaurant', restaurantSchema)

// Create shcema of user model
// Create schema of user model





// Export functions