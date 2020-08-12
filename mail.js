const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

//API settings
const auth = {
    auth: {
        api_key: 'key-6a4ab6d5ee6c40db89bd4cba18c1a5ea',
        domain: 'sandboxc4245783c64a4ce882d7c9d270c8fea8.mailgun.org'
    }
}

//Transport data to MailGun
const transporter = nodemailer.createTransport(mailGun(auth));

/* mail: projektgvtest@gmail.com
   password: grupaversoczestochowa */

//Seending email
const sendMail = (name, number, email, text) => {
    const mailOptions = {
        from: email,
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
        /*you can add style and build template for email*/
    };

    //Error catcher
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('error in mail.js');
            console.log(err);
        }
        else {
            console.log('Message sent!! Check your email (projektgvtest@gmail.com)');
        }
    });
}
module.exports = sendMail;