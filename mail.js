const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

//API settings
const auth = {
    auth: {
        api_key: process.env.API_KEY,
        //PLACE FOR DOMAIN
        domain: 'sandbox502437ab7af945519d1b2833e8768f39.mailgun.org'
    }
}

//Transport data to MailGun
const transporter = nodemailer.createTransport(mailGun(auth));

//Seending email
const sendMail = (name, number, email, text, cb) => {
    const mailOptions = {
        from: email,
        //WHERE EMAILS SHOULD BE SENT
        to: 'projektgvtest@gmail.com',
        subject: `formularz - ${name}`,
        html: `
        <ul>
        <li>Imie i nazwisko: ${name}</li>
        <li>Numer telefonu: ${number}</li>
        <li>Adres e-mail: ${email}</li>
        </ul></br>
        <p>${text}</p>`
        /*you can add style and build template for email*/
    };

    //Error catcher
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('error mail.js');
        } else {
            console.log('message sent');
        }
    });
}
module.exports = sendMail;



/*

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

//API settings
const auth = {
    auth: {
        api_key: process.env.API_KEY,
        //PLACE FOR DOMAIN
        domain: 'sandbox502437ab7af945519d1b2833e8768f39.mailgun'
    }
}

//Transport data to MailGun
const transporter = nodemailer.createTransport(mailGun(auth));

//Seending email
const sendMail = (name, number, email, text, cb) => {
    const mailOptions = {
        from: "email",
        //WHERE EMAILS SHOULD BE SENT
        to: 'projektgvtest@gmail.com',
        subject: 'Wiadomość testowa wygenerowana ze strony',
        html: `
        <h2>Dane:</h2>
        <ul>
        <li>Imie i nazwisko: ${name}</li>
        <li>Numer telefonu: ${number}</li>
        <li>Adres e-mail: ${email}</li>
        </ul></br>
        <p>${text}</p>`
        //you can add style and build template for email
    };

    //Error catcher
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('error mail.js');
        } else {
            console.log('message sent');
        }
    });
}
module.exports = sendMail;

*/