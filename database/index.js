const mongoose = require('mongoose');
const dbURI ='mongodb://localhost:27017/bspn';
const User = require('./schema');

mongoose.connect(dbURI, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to bspn');
});

// const user = new User({
//   username: 'noel',
//   password: 'password',
//   firstName: 'Brian',
//   lastName: 'Kwon',
//   favorites: {
//     dogs: {
//       info: {
//         name: 'YO'
//       }
//     }
//   }
// });


// INSERT NEW USER
const insertUser = async (newUser) => {
  const user = new User(newUser);
  await user.save((err) => {
    if (err) throw err;
    console.log('saved');
  });
  return 'Successfully created user!';
};

// UPDATE FAVORITES OF USER
const updateUser = async (username) => {
  const updateQuery = { 'favorites.dogs.info.name': 'fluff', 'favorites.dogs.info.breed': 'hound', 'favorites.dogs.info.url': 'url' }
  await User.updateOne({ username: username }, updateQuery , (err, doc) => {
    if (err) { throw err; }
    console.log(doc);
  });
};

module.exports = {
  insertUser: insertUser,
  updateUser: updateUser
};