var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);