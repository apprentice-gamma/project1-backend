var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;
var Comment         = require('./comment.js');
var uniqueValidator = require('mongoose-unique-validator');

var BookmarkSchema = new Schema({
  url:         { type: String, required: true, unique: true },
  description: { type: String, required: true },
  title:       { type: String, required: true },
  user:        { type: String, required: true },
  comments:    [ Comment.schema ],
  date:        { type : Date, default: Date.now }
});

BookmarkSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Bookmark', BookmarkSchema);