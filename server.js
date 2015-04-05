var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/project1-backend');

var User = require('./app/models/user.js');
// var Bookmark = require('./app/models/bookmark.js');
var Shoutout = require('./app/models/shoutout.js');

var bookmarks = require('./routes/bookmarks');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Use morgan for logging 'dev', 'combined', 'common'
app.use(morgan('dev'));

var port = process.env.PORT || 8080; // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/bookmarks', bookmarks);
app.use('/api', api);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);