const express = require('express');
const app = express();
const log = console.log;
const path = require('path');
const PORT = 8080;
const sendMail = require('./mail');
app.use(express.static(__dirname + '/public'));
var fs = require("fs");
console.log("\n *START* \n");
//Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());



//Receiving data
app.post('/email', (req, res) => {
    const { name, number, email, text } = req.body;
    log('Data: ', req.body);

    sendMail(name, number, email, text, function (err, data) {
        if (err) {
            console.log("Wiadomość nie została wysłana");
        } else {
            console.log("Wiadomość wysłana");
        }
    });
});


//Sending data from form
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});


app.listen(PORT, () => { log('SERVER IS STARTING ON PORT, ', 8080); });