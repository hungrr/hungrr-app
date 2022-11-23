import express from "express";

const router = express.Router();

router.post('/phonenumberlogin', (req, res) => {
    const {
        body: {
            phoneNumber
        }
    } = req;

});

export default router;