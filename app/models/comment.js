var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var CommentSchema = new Schema({

  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

CommentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Comment', CommentSchema);