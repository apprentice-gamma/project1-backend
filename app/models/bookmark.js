var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Comment      = require('./comment.js');

var BookmarkSchema = new Schema({
  url: String,
  description: String,
  title: String,
  user: String,
  comments: [Comment.schema],
  date: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);