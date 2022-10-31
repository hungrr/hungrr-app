// Imports

// const axios = require('axios')
// import * as fetch from "package_name";
// import 'whatwg-fetch'
const router = require('express').Router()
module.exports = router



const key = 'ask Nate for this :P'
console.log("get's here" + process.env.GOOGLE_API_KEY);
// router.get('/restaurants', async (req, res, next) => {
//  try {
fetch(
`https://maps.googleapis.com/maps/api/place/nearbysearch/
json?type=restaurant&location=-33.8670522%2C151.1957362&radius=1500&key=${key}`
)
.then((response) => response.json())
.then((data) => {
  console.log(data);
})
  //  } 
//  catch (err) {
  // next(err)
// }
// })

console.log("also here");

// Create schema of restaurant model





// Export functions