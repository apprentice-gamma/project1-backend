var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BookmarkSchema = new Schema({
  url: String,
  description: String,
  title: String,
  user: String,
  comments: [String]
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);