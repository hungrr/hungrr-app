// Imports
require('dotenv').config();


const key = process.env.GOOGLE_API_KEY;
var img;
console.log(key);
fetch(
`https://maps.googleapis.com/maps/api/place/nearbysearch/
json?keyword=restaurant&location=28.453535%2C-81.293822&radius=1500&key=${key}`
)
.then((response) => response.json())
.then((data) => {
  // console.log(data);
  console.log(data.results[0].name);
  console.log(data.results.length);
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

// Create schema of restaurant model





// Export functions