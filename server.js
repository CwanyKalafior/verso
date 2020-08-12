const express = require('express');
const app = express();
const log = console.log;
const path = require('path');
const PORT = 8080;
const sendMail = require('./mail');
app.use(express.static(__dirname + '/public'));
//Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());



//Sending data
app.post('/email', (req, res) => {
    const { name, number, email, text } = req.body;
    log('Data: ', req.body);

    sendMail(name, number, email, text);
});


//Receiving data from form
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});


app.listen(PORT, () => { log('SERVER IS STARTING ON PORT, ', 8080); });