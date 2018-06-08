var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('./config/dev');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: cred.user,
    clientId: cred.clientId,
    clientSecret: cred.clientSecret,
    refreshToken: cred.refreshToken
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var additionalInfo = req.body.additionalInfo;
  var content = `name: ${name} \n email: ${email} \n additionalInfo: ${additionalInfo} `;

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
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

module.exports = router;

//
//
// const send = ({ email, name, text }) => {
//   const from = name && email ? `${name} <${email}>` : `${name || email}`;
//   const message = {
//     from,
//     to: 'react.nodemailer@gmail.com',
//     subject: `New message from ${from} at creating-contact-forms-with-nodemailer-and-react`,
//     text,
//     replyTo: from
//   };
//
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(
//       message,
//       (error, info) => (error ? reject(error) : resolve(info))
//     );
//   });
// };
//
// export default send;
