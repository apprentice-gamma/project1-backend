var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Shoutout     = require('./shoutout.js');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema   = new Schema({

  name: { type: String, required: true, unique: true },
  google_id: String,
  shoutouts: [Shoutout.schema]
});

BookmarkSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);