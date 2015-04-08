var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Shoutout     = require('./shoutout.js');

var UserSchema   = new Schema({
  name: { type: String, required: true, unique: true },
  shoutouts: [Shoutout.schema]
});

module.exports = mongoose.model('User', UserSchema);