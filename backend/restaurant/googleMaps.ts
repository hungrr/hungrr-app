// Imports
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'cross-fetch';
//import Restaurant from './restaurant_model';
const router = express.Router()
dotenv.config();
  

// Create API routes for POST and GET requests
const key = process.env.GOOGLE_API_KEY;
//var location = "28.600409241872445%2C-81.20164096376762"; //ucf
//var radius = 1500;

router.get('/getPlaces', async (req, res) => {
  const{location, radius} = req.body;
  
  const request = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=restaurant&location='+ location + '&radius=' + radius + '&key=' + key);
  const data = await request.json();
  const results = data.results;
  console.log(results[0].price_level)
  
  const places = [];
  for(let i = 0; i < results.length; i++) {
    const restaurant = {
      name: results[i].name,
      place_id: results[i].place_id,
      vicinity: results[i].vicinity,
      business_status: data.results[i].business_status,
      opening_hours: results[i].opening_hours,
      photos: results[i].photos,
      price_level: results[i].price_level,
      rating: results[i].rating,
      user_ratings_total: results[i].user_ratings_total
    };
    places.push(restaurant)
  }
  

  res.status(200).json(places);
});

// Export functions
export default router;