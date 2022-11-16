
/*
    NOT FINISHED - JUST A BASIC SKELETON TO BUILD OFF OF
*/

// Imports

const express = require('express')
const router = express.Router()
const Restaurant = require('../models/user_models')

// Create routes functions for GET, POST, UPDATE, and DELETE

// GET

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single'})
})


// POST

router.post('/', (req, res) => {
    const {title} = req.body
    try {
        const restaurant = await Restaurant.create({name})
        res.status(200).json(restaurant)
    } catch (error) {
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

