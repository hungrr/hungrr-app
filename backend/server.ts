import express from 'express';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
//import loginRoutes from './login/login_routes';
import userroutes from './user/user_routes';
import googleMaps from './restaurant/googleMaps';

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(bodyparser.urlencoded({ extended : true }));

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});


// routes
//app.use('/api/login',loginRoutes)
app.use('/api/user', userroutes)
app.use('/api/places', googleMaps);

/*
// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})
*/

// Connect to database
mongoose.connect(process.env.DATABASE || "")
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
