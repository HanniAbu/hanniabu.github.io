var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var app = express();


var transporter = nodemailer.createTransport(smtpTransport({
    host: 'localhost',
    port: 9000,
    auth: {
        user: 'username',
        pass: 'password'
    }
}));

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Hanni ✔ <hanniabu@gmail.com>', // sender address
    to: '9737684048@vtext.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});


app.listen(9000);