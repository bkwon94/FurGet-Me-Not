const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  firstName: String,
  lastName: String,
  favorites: {
    dogs: {
      info: {
        name: [],
        breed: [],
        url: []
      }
    },
    cats: {
      info: {
        name: [],
        breed: [],
        url: []
      }
    }
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;