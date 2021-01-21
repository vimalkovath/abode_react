var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
const https = require('https');
const request = require('request');
const helmet = require('helmet');

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(helmet.frameguard());

app.use(express.static(__dirname + '/build'));
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get('*', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

var port = process.env.PORT || 8300;
app.listen(port);

console.log('server is running on port ', port);
