
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
    },
    place_id: {
        type: String,
        required: true
    },
    vicinity: {
        type: String,
        required: true
    },
    user_ratings_total: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price_level: {
        type: Number,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('restaurant', restaurantSchema)

// ------------------