const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

//API settings
const auth = {
    auth: {
        api_key: '3cf93ab5e0db3793730e699da8d0c823-0d2e38f7-af7611d2',
        //PLACE FOR DOMAIN
        domain: 'sandbox11a0fb43390a49a59b77090e2f380d09.mailgun'
    }
}

//Transport data to MailGun
const transporter = nodemailer.createTransport(mailGun(auth));

//Seending email
const sendMail = (name, number, email, text, cb) => {
    const mailOptions = {
        from: email,
        //WHERE EMAILS SHOULD BE SENT
        to: 'biuro@grupaverso.com.pl',
        subject: 'Wiadomość testowa wygenerowana ze strony',
        html: `
        <h2>Dane:</h2>
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
            return cb(err, null);
        }
        return cb(null, data);
    });
}
module.exports = sendMail;