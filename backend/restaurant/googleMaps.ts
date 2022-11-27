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
  
  const places = results.map((restaurant:any) => {
    return { ...restaurant, photoLink: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.photos[0].photo_reference}&key=${key}` };
  })

  res.status(200).send({
    results: places
  });

});

// Export functions
export default router;