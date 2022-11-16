import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});


// routes
//app.use('/',)

// Connect to database
