var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ShoutoutSchema = new Schema({
  //text: { type: String, required : true },
  text: String,
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shoutout', ShoutoutSchema);