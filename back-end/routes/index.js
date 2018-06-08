var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: creds.user,
    clientId: creds.googleClientId,
    clientSecret: creds.googleClientSecret,
    refreshToken: creds.googleRefreshToken
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phoneNumber = req.body.phoneNumber;
  var email = req.body.email;
  var radioGroup = req.body.radioGroup;
  var gender = req.body.gender;
  var harnessSize = req.body.harnessSize;
  var additionalInfo = req.body.additionalInfo;
  var content = `firstName: ${firstName} \n
    Last Name: ${lastName} \n
    Phone Number: ${phoneNumber} \n
    Email: ${email} \n
    Lessons/Repairs: ${radioGroup} \n
    Gender: ${gender} \n
    Harness Size: ${harnessSize} \n
    Additional Info: ${additionalInfo}`;

  var mail = {
    from: 'User <testallprojects123@gmail.com>',
    to: 'testallprojects123@gmail.com',
    subject: 'Nodemailer test',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      });
      console.log(err);
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

module.exports = router;
