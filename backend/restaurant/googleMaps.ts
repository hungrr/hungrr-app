// Imports
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'cross-fetch';
//import Restaurant from './restaurant_model';
const router = express.Router()
dotenv.config();
  

// Create API routes for POST and GET requests
var u = "28.600409241872445%2C-81.20164096376762";
const key = process.env.GOOGLE_API_KEY;
var radius = 32000;

router.get('/getPlaces', async (req, res) => {
  const{location, rad} = req.body;
  
  const request = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=restaurant&location='+ u + '&radius=' + radius + '&key=' + key);

  const data = await request.json();
  const results = data.results;
  
  const places = results.map(({
    vicinity, business_status, name,
    place_id, price_level, rating,
    user_ratings_total, photos
  }:any) => {
    return {
      photoLink: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photos[0].photo_reference}&key=${key}`,
      vicinity, business_status, name,
      place_id, price_level, rating,
      user_ratings_total
    };
  })

  res.status(200).send({
    results: places
  });

});

// Export functions
export default router;