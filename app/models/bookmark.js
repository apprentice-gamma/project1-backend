var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BookmarkSchema = new Schema({
  url: String,
  description: String,
  title: String
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);