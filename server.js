var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(bodyParser.json());

//Import the router
var nespressoRouter = require('./routes/nespresso');

//Use the router of nespresso
app.use('/nespresso', nespressoRouter);


http.createServer(app).listen(8080, function() {
    console.log('Listening on port 8080');
});

