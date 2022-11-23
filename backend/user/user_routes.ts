
// Imports
import express from 'express';
const router = express.Router()
import mongoose from 'mongoose';
import User from '../user/user_model';
//import Restaurant from '../restaurant/restaurant_model';

// GET
router.get('/getUser/:phoneNumber', async (req, res) => {
    const { phoneNumber } = req.params

    /*
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
    */
  
    await User.find({
        phoneNumber
    }).then((response) => {
        res.status(200).send({
            results: response,
            found: response.length > 0
        });
    }).catch((error: any) => {
        res.status(400).send({ error });
    })
    
    /*
    if (!user) {
      return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(user)
    */
})


// POST
/*
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
*/

// Create User
router.post('/newUser', async (req, res) => {
    const { name, phoneNumber } = req.body

    // add to the database
    try {
      const user = await User.find({ phoneNumber }).then((response) => response);

      if (user.length === 0) {
        const newUserData = await User.create({ name, phoneNumber, favorites: [  ] })
        res.status(200).send({
            newUser: true,
            user: newUserData
        })
      } else {
        res.status(200).send({
            newUser: false,
            user: user[0]
        })
      }

    } catch (error : any) {
      res.status(400).json({ error: error.message })
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
export default router;

