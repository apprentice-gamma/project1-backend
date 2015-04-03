var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Shoutout     = require('./shoutout.js');

var UserSchema   = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  shoutouts: [Shoutout.schema]
});

module.exports = mongoose.model('User', UserSchema);