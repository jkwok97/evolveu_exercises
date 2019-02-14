const twilio = require('twilio');
const { accountSid } = require('./service');
const { authToken } = require('./service');

module.exports = new twilio.Twilio(accountSid, authToken);