var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Bookmark     = require('./app/models/bookmark');

var UserSchema   = new Schema({
    firstname: String,
    lastname: String,
    email: String
    // bookmarks: [Bookmark.schema]
});

module.exports = mongoose.model('User', UserSchema);