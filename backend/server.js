// This code is based on https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
//
// server.js

// BASE SETUP
// =============================================================================

// load the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var app = express();                 // define our app using express
var FILE = path.join(__dirname, 'users.json');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 5555);        // set our port

// MIDDLEWARE for accessing the server from other servers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:5555/api)
router.get('/', function (req, res) {
  res.json({message: 'hooray! welcome to our api!'});
});

router.get('/users', function(req, res, next) {
  fs.readFile(FILE, function(err, data) {
    if (err || !data) { return next(err); }

    res.json(JSON.parse(data));
  });
});

router.post('/user', function(req, res, next) {
  fs.readFile(FILE, function(err, data) {
    if (err || !data) { return next(err); }
    var users = JSON.parse(data);
    users.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
    fs.writeFile(FILE, JSON.stringify(users), function(err) {
      if (err) { return next(err); }
      res.json({message: "User successfully added."});
    });
  });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(app.get('port'), function () {
  console.log('Connect to the server via http://localhost:' + app.get('port'));
});
