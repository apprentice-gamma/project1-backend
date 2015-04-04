var express = require('express');
var router = express.Router();
var User     = require('../models/user.js');
var Bookmark = require('../models/bookmark.js');
var Shoutout = require('../models/shoutout.js');

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

router.route('/users/:user_id/shoutouts')
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

module.exports = router;