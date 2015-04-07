var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Comment      = require('./comment.js');

function validator (val) {
  return val == 'something';
}
//var customValidation = [validator, 'Uh oh! {PATH} is not a valid input type.'] {validate: customValidation}
var BookmarkSchema = new Schema({
  url: {type: String, required: '{PATH} is required' },
  description: String,
  title: String,
  user: String,
  comments: [Comment.schema],
  date: { type : Date, default: Date.now }
});

BookmarkSchema.path('description').required(true, 'grr :( ');
    
module.exports = mongoose.model('Bookmark', BookmarkSchema);