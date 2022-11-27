import express from "express";
import twilioClient from "./twilioClient";

const router = express.Router();

router.post('/phonenumberlogin', (req, res) => {
    const {
        body: {
            phoneNumber
        }
    } = req;

});

export default router;