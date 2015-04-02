var mongoose     = require('mongoose');

var BookmarkSchema = mongoose.Schema({
  url: String,
  description: String,
  title: String
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);