var express = require('express');
var router = express.Router();

var User     = require('../models/user.js');
var Shoutout = require('../models/shoutout.js');

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
  .delete(function(req, res){
        User.remove({
            _id: req.params.user_id
        }, function(err, user){
            if(err)
                res.send(err)
            res.json({message: 'Successfully deleted user.'})
        });
    });

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

module.exports = router;

