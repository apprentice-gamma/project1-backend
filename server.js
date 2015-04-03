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




// SHOUTOUTS
router.route('/users')

// create a user (accessed at POST http://localhost:8080/api/users)
.post(function(req, res) {

  var user = new User(); // create a new instance of the User model
  user.name = req.body.name; // set the users first name (comes from the request)

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
// .put(function(req, res) {
//   // use our user model to find the user we want
//   User.findById(req.params.user_id, function(err, user) {

//     if (err)
//       res.send(err);

//     user.name = req.body.name; // update the users info

//     // save the user
//     user.save(function(err) {
//       if (err)
//         res.send(err);

//       res.json({
//         message: 'User updated!'
//       });
//     });

//   });
// })

router.route('/users/:user_id/shoutout')

// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
.post(function(req, res) {

    User.findById(req.params.user_id, function(err, user) {

      var shoutout = new Shoutout();
      shoutout.text = req.body.text;
      user.shoutouts.push(shoutout);

      user.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'Shoutout created!'
        });
      });

    });
  })
// END SHOUTOUTS



// BOOKMARKS --------------------------
router.route('/bookmarks')

.post(function(req, res) {

  var bookmark = new Bookmark();
  bookmark.url = req.body.url;
  bookmark.title = req.body.title;
  bookmark.user = req.body.user;
  bookmark.description = req.body.description;

  bookmark.save(function(err) {
    if (err)
      res.send(err);

    res.json({
      message: 'Bookmark created!'
    });
  });

})

.get(function(req, res) {
  Bookmark.find(function(err, bookmarks) {
    if (err)
      res.send(err);

    res.json(bookmarks);
  });
});

router.route('/bookmarks/:bookmark_id')
.get(function(req, res) {
  Bookmark.findById(req.params.bookmark_id, function(err, bookmark) {
    if (err)
      res.send(err);
    res.json(bookmark);
  });
})


.put(function(req, res) {

  Bookmark.findById(req.params.bookmark_id, function(err, bookmark) {

    if (err)
      res.send(err);

    bookmark.url = req.body.url;
    bookmark.title = req.body.title;
    bookmark.description = req.body.description;


    bookmark.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Bookmark updated!'
      });
    });

  });
})

router.route('/bookmarks/:bookmark_id/comments')
  .post(function(req, res) {

    Bookmark.findById(req.params.bookmark_id, function(err, bookmark) {

      bookmark.comments.push(req.body.commentText);

      bookmark.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'Comment created!'
        });
      });

    });
  })


// END BOOKMARKS

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);