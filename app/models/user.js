var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Bookmark     = require('./bookmark.js');
var Shoutout     = require('./shoutout.js');

var UserSchema   = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  bookmarks: [Bookmark.schema],
  shoutouts: [Shoutout.schema]
});

module.exports = mongoose.model('User', UserSchema);