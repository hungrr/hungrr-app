// Imports
require('dotenv').config();
const express = require('express')
const router = express.Router()
  

// Create API routes for POST and GET requests
const key = process.env.GOOGLE_API_KEY;
var location = "28.600409241872445%2C-81.20164096376762"; //ucf
var img;
var radius = 1500;


// Create function that fetches API data
const fetchRestaurants = async(req, res) => {
    const {location, radius} = req.params;
fetch(
`https://maps.googleapis.com/maps/api/place/nearbysearch/
json?keyword=restaurant&location=${location}&radius=${radius}&key=${key}`
)
.then((response) => response.json())
.then((data) => {
//   console.log(data);
  console.log("name of first restaurant in list:", data.results[0].name);
  console.log("number of results:", data.results.length);
  img = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=` +
  data.results[0].photos[0].photo_reference + '&key=' + key;
  console.log(img);
})
.then(() => {
  fetch(img)
  .then((response) => response)
  .then((data) => {
    // console.log(data);
    // const myImage = new Image(100, 200);
    // myImage.src = data;
    // document.body.appendChild(myImage);
  })
})
}

router.get('/:location/:radius', fetchRestaurants)


// Export functions
module.exports = router