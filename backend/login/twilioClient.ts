import dotenv from 'dotenv';

dotenv.config();
const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
export default twilioClient;