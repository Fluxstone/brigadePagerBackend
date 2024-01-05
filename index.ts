const express = require('express');
const app = express();
const port = 4500;

/**
 * ---------
 * Alarm API
 * ---------
 */
// When new Alarm is created a push notif is sent to users, documentation is created ect.
app.post('/alarm/create', function (req, res) {
    console.log('/users/create');
    //sendPushNotif()
    //createDocumentation()
    res.send('/users/create');
});

//User can reply with a positive/negative message to alarm
app.post('/alarm/reply', function (req, res) {
    console.log('/users/reply');
    res.send('/users/reply');
});

/**
 * ---------------------------
 * Documentation API
 * For Documenting past alarms
 * ---------------------------
 */
app.post('/documentation/create', function (req, res) {
    console.log('/documentation/create');
    res.send('/documentation/create');
});

app.patch('/documentation/modify', function (req, res) {
    console.log('/documentation/modify');
    res.send('/documentation/modify');
});

app.delete('/documentation/delete', function (req, res) {
    console.log('/documentation/delete');
    res.send('/documentation/delete');
});

//Get a single alarm document
app.get('/documentation/getDocument', function (req, res) {
    console.log('/documentation/getDocument');
    res.send('/documentation/getDocument');
});

//Get all alarm documents
app.get('/documentation/getAllDocuments', function (req, res) {
    console.log('/documentation/getAllDocuments');
    res.send('/documentation/getAllDocuments');
});

/**
 * --------
 * User API
 * --------
 */
app.post('/users/create', function (req, res) {
    console.log('/users/create');
    res.send('/users/create');
});

app.patch('/users/modify', function (req, res) {
    console.log('/users/modify');
    res.send('/users/modify');
});

app.delete('/users/delete', function (req, res) {
    console.log('/users/delete');
    res.send('/users/delete');
});

app.get('/users/getUser', function (req, res) {
    console.log('/users/getUser');
    res.send('/users/getUser');
});

app.get('/users/getAllUser', function (req, res) {
    console.log('/users/getAllUser');
    res.send('/users/getAllUser');
});

/**
 * Further configuration
 */
app.get('/', function (req, res) {
    res.send(`brigadepager backend, running on ${port}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})