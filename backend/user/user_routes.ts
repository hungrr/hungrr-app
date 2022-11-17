
// Imports
import express from 'express';
const router = express.Router()
import user from '../user/user_model';
import Restaurant from '../restaurant/restaurant_model';

// Create routes functions for GET, POST, UPDATE, and DELETE

// GET

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single'})
})


// POST

router.post('/', (req, res) => {
    const {business_status, geometry, icon, icon_background_color, icon_mask_base_uri, name, opening_hours, photos, place_id, 
        plus_code, price_level, rating, reference, scope, types, user_rating_totals, vicinity} = req.body
    try {
        const restaurant = Restaurant.create({business_status, geometry, icon, icon_background_color, icon_mask_base_uri, name, opening_hours, photos, place_id, 
        plus_code, price_level, rating, reference, scope, types, user_rating_totals, vicinity})
        res.status(200).json(restaurant)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
})

// DELETE

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE single'})
})

router.delete('/', (req, res) => {
    res.json({mssg: 'DELETE all'})
})

// UPDATE

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE'})
})

// Export functions

module.exports = router

