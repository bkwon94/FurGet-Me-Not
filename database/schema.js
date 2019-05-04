const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  favorites: {
    sports: String,
    team: String,
    player: String
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;