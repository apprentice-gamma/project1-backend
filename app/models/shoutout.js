var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ShoutoutSchema = new Schema({
  shout: String,
  shouter: String,
  shoutee: String
  //date
});

module.exports = mongoose.model('Shoutout', ShoutoutSchema);