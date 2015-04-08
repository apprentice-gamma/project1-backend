var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var ShoutoutSchema = new Schema({

  text: { type: String, required : true },
  time: { type: Date, default: Date.now }
});

BookmarkSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Shoutout', ShoutoutSchema);