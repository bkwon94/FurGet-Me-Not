const mongoose = require('mongoose');
const dbURI ='mongodb://localhost:27017/bspn';
const User = require('./schema');

mongoose.connect(dbURI, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to bspn');
});

const user = new User({
  username: 'bkwon94',
  password: 'password',
  firstName: 'Brian',
  lastName: 'Kwon',
  favorites: {
    dogs: 
  }
});

// INSERT NEW USER
const insertUser = () => {
  user.save((err) => {
    if (err) throw err;
    console.log('saved');
  })
};

