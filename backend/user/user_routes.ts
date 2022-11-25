
// Imports
import express from 'express';
const router = express.Router()
import mongoose from 'mongoose';
import { isConstructSignatureDeclaration } from 'typescript';
import user from './user_model';
import User from './user_model';
import IUser from './user_model';

//import Restaurant from '../restaurant/restaurant_model';

// Get User
router.get('/getUser/:phoneNumber', async (req, res) => {
    const { phoneNumber } = req.params

    await User.find({
        phoneNumber
    }).then((response) => {
        res.status(200).send({
            results: response,
            found: response.length > 0
        });
    }).catch((error) => {
        res.status(400).send({ error });
    })

})

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

    } catch (error) {
      res.status(400).send({ hasError: error })
    }
})

/*
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

            const foundUser = user[0];

            const uniqueFavorites = [ ...(foundUser.favorites) ];

            for (let x = 0; x < newFavorites.length; ++x) {
                let foundFavorite = false;

                for (let y = 0; y < uniqueFavorites.length; ++y) {
                    if (uniqueFavorites[x].place_id === newFavorites[x].place_id) {
                        foundFavorite = true;
                        break;
                    }
                }

                if (!foundFavorite) {
                    uniqueFavorites.push(newFavorites[x]);
                }
            }

            await User.update({ phoneNumber }, {
                $set: { favorites: uniqueFavorites }
            });

            res.status(200);

        }

    } catch (error) {
        res.status(400).send({ hasError: true, error });
    };

})
*/

/*
// Mason's attempt at the add favorites route
// Typescript is not the vibe
router.post('/addFavorites', async (req, res) => {

    const { phoneNumber, favorites } = req.body

    try {
        const user = await User.find({ phoneNumber }).then((response) => response);
        
        if (!user) {
            res.status(400).send({error: "no user found"});
        } else {
            const foundUser = user;
            const oldFavorites = [...(foundUser.favorites)];
            const allFavorites = [...(foundUser.favorites)]

            for(let i = 0; i < favorites.length; i ++) {
                if(oldFavorites[i] != favorites[i]){
                    allFavorites.push(favorites)
                }
            }
        }

    } catch (error) {
        res.status(400).send({ hasError: true, error });
    }

})
*/

// Delete User
router.delete('/deleteUser', async (req, res) => {
    const { phoneNumber } = req.body
    // add to the database
    try {
        const user = await User.findOneAndDelete({ phoneNumber: phoneNumber });
        if (!user) {
            res.status(400).send({ error: "No user found" });
        }
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
      }
})

// Update User
router.patch('/updateUser', async (req, res) => {
    const { phoneNumber } = req.body
    // Update user in database
    try {
        const user = await User.findOneAndUpdate({ phoneNumber: phoneNumber }, {
            ...req.body
        });
        if (!user) {
            res.status(400).send({ error: "No user found" });
        }
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
      }
})

// Export functions
export default router;

