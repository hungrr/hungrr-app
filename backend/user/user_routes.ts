
// Imports
import express from 'express';
const router = express.Router()
import mongoose from 'mongoose';
import user from '../user/user_model';
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
            user: newUserData,
            hasError: false
        })
      } else {
        res.status(200).send({
            newUser: false,
            user: user[0],
            hasError: false
        })
      }

    } catch (error : any) {
      res.status(400).send({ hasError: error })
    }
})

router.post('/addFavorites', async (req, res) => {

    const {
        body: {
            phoneNumber,
            newFavorites
        }
    } = req;

    try {
        let user = await User.find({ phoneNumber }).then((response) => response);
        
        if (user.length === 0) {
            res.status(200).send({ hasError: true, userExists: false });
        } else {
            user = user[0];

            const uniqueFavorites = [ ...(user.favorites) ];
            for (const newFavorite in newFavorites) {

                let foundFavorite = false;
                for (const favorite in user.favorites) {
                    if (newFavorite["place_id"] === favorite["place_id"]) {
                        foundFavorite = true;
                        break;
                    }
                }

                if (!foundFavorite) {
                    uniqueFavorites.push(newFavorite);
                }
            }

            await User.update({ phoneNumber }, {
                $set: { favorites: uniqueFavorites }
            });

            res.status(200);

        }

    } catch (error : any) {
        res.status(400).send({ hasError: true, error });
    };

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

