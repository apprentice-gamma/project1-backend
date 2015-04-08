var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Shoutout     = require('./shoutout.js');

var UserSchema   = new Schema({
  name: String,
  google_id: String,
  shoutouts: [Shoutout.schema]
});

module.exports = mongoose.model('User', UserSchema);