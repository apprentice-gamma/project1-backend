var express = require('express');
var router = express.Router();

var User     = require('../models/user.js');
var Shoutout = require('../models/shoutout.js');

// ------------------------------------------------------
// /users (GET, POST)
// ------------------------------------------------------
router.route('/users')
  .post(function(req, res) {
    var user = new User(); // create a new instance of the User model
    user.name = req.body.name; // set the users first name (comes from the request)
    user.google_id = req.body.google_id;
    // save the user and check for errors
    user.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'User created!'
      });
    });
  })

  .get(function(req, res) {
    User.find(function(err, users) {
      if (err)
        res.send(err);

      res.json(users);
    });
  });

// ------------------------------------------------------
// /users/:user_id (GET, DELETE)
// ------------------------------------------------------
router.route('/users/:user_id')
  // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err)
        res.send(err);

      res.json(user);
    });
  })

  .delete(function(req, res){
    User.remove({_id: req.params.user_id}, function(err, user){
      if(err)
        res.send(err);

      res.json({message: 'Successfully deleted user.'});
    });
  });

// ------------------------------------------------------
// /users/:user_id/shoutouts (POST)
// ------------------------------------------------------
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
  });

// ------------------------------------------------------
// /users/:user_id/shoutouts/:shoutout_id (DELETE)
// ------------------------------------------------------
router.route('/users/:user_id/shoutouts/:shoutout_id')

  .delete(function(req, res){
    User.findById(req.params.user_id, function(err, user) {
      user.shoutouts.pull(req.params.shoutout_id);
      user.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'Successfully deleted shoutout.'
        });
      });
    });
  });

module.exports = router;