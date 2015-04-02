var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
// var Bookmark

var UserSchema   = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    bookmarks: [new Schema(url: String,
                           description: String,
                           title: String)]
    // bookmarks: [Bookmark.schema]
});

module.exports = mongoose.model('User', UserSchema);