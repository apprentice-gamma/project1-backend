var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Shoutout     = require('./shoutout.js');

var UserSchema   = new Schema({
<<<<<<< HEAD
  name: String,
  google_id: String,
=======
  name: { type: String, required: true, unique: true },
>>>>>>> 8581378717828ae87a3681b32696731d4d7ede6c
  shoutouts: [Shoutout.schema]
});

module.exports = mongoose.model('User', UserSchema);