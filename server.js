// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

var User = require('./app/models/user.js');
var Bookmark = require('./app/models/bookmark.js');
var Shoutout = require('./app/models/shoutout.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    message: 'hooray! welcome to our api!'
  });
});

// routes that end in /users
//---------------------------------------------------
router.route('/users')

// create a user (accessed at POST http://localhost:8080/api/users)
.post(function(req, res) {

  var user = new User(); // create a new instance of the User model
  user.firstname = req.body.firstname; // set the users first name (comes from the request)
  user.lastname = req.body.lastname;
  user.email = req.body.email;

  // save the user and check for errors
  user.save(function(err) {
    if (err)
      res.send(err);

    res.json({
      message: 'User created!'
    });
  });

})

// get all the users (accessed at GET http://localhost:8080/api/users)
.get(function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
});

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
.get(function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
})

// update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
.put(function(req, res) {
  // use our user model to find the user we want
  User.findById(req.params.user_id, function(err, user) {

    if (err)
      res.send(err);

    user.firstname = req.body.firstname; // update the users info
    user.lastname = req.body.lastname;
    user.email = req.body.email;

    // save the user
    user.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'User updated!'
      });
    });

  });
})

// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
// .delete(function(req, res) {
//     Bear.remove({
//         _id: req.params.bear_id
//     }, function(err, bear) {
//         if (err)
//             res.send(err);

//         res.json({ message: 'Successfully deleted' });
//     });
// });

router.route('/bookmarks')
.get(function(req, res) {
  res.json(User.bookmarks);
});

router.route('/users/:user_id/bookmarks')
  .post(function(req, res) {

    User.findById(req.params.user_id, function(err, user) {

      var bookmark = new Bookmark();
      bookmark.url = req.body.url;
      bookmark.description = req.body.description;
      bookmark.title = req.body.title;
      user.bookmarks.push(bookmark);

      user.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'Bookmark created!'
        });
      });

    });
  })

.get(function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user.bookmarks);
  });
});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);