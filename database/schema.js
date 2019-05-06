const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  favorites: {
    dogs: {
      info: {
        name: String,
        breed: String,
        url: String
      }
    },
    cats: {
      info: {
        name: String,
        breed: String,
        url: String
      }
    }
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;