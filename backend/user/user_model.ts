
/*
    NOT FINISHED - JUST A BASIC SKELETON TO BUILD OFF OF
*/

// Imports

const mongoose = require('mongoose')
const Schema = mongoose.Scheme

const restaurantSchema = new Schema({
    business_status: {
        type: String,
        required: true
    },
    geometry: {
        type: Object,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    icon_background_color: {
        type: String,
        required: true
    },
    icon_mask_base_uri: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    opening_hours: {
        type: Object,
        required: true
    },
    photos: {
        type: Array,
        required: true
    },
    place_id: {
        type: String,
        required: true
    },
    plus_code: {
        type: Object,
        required: true
    },
    price_level: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    scope: {
        type: String,
        required: true
    },
    types: {
        type: Array,
        required: true
    },
    user_ratings_total: {
        type: Number,
        required: true
    },
    vicinity: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('restaurant', restaurantSchema)

// ------------------