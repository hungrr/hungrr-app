import express from 'express';
//import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import initMB from 'messagebird';
const router = express.Router();

dotenv.config()
let key: string
if (process.env.MESSAGEBIRD_API_KEY) {
  key = process.env.MESSAGEBIRD_API_KEY
} else {
  throw new Error("WHATEVER environment variable is not set")
}

const messagebird = initMB(key);


// Phone number POST request
router.post('/phonenumber', function(req, res) {
    const number = req.body.number;    
    messagebird.verify.create(number, {
        originator : 'Code',
        template : 'Your verification code is %token.'
    }, function (err: any, response: any) {
        if (err) {
            console.log(err);
            res.render('step1', {
                error : err.errors[0].description
            });
        } else {
            console.log(response);
            res.render('step2', {
                id : response.id
            });
        }
    })    
});

// Verify OTP code
router.post('/verify', function(req, res) {
    const id = req.body.id;
    const token = req.body.token;
    messagebird.verify.verify(id, token, function(err: any, response: any) {
        if (err) {
            console.log(err);
            res.render('step2', {
                error: err.errors[0].description,
                id : id
            });
        } else {
            console.log(response);
            res.render('step3');
        }
    })    
});

export default router;


