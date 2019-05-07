const mongoose = require('mongoose');
const dbURI ='mongodb://localhost:27017/bspn';
const User = require('./schema');

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to bspn');
});

// GET USER FAVS
const getUserFavorites = async(user) => {
  let userFavorites;
  await User.find({ username: user }, (err, docs) => {
    if (err) throw err;
    userFavorites = docs[0];
    console.log(userFavorites.favorites);
  })
  return userFavorites;
};
// getUserFavorites('2')


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
const updateUser = async (username, breed, name, url) => {
  const updateQuery = [{ $push: {'favorites.dogs.info.breed': breed} }, { $push: {'favorites.dogs.info.name': name} }, { $push: {'favorites.dogs.info.url': url} }];
  await updateQuery.forEach(query => {
    User.updateOne({ username: username }, query, (err, doc) => {
      if (err) { throw err; }
      console.log(doc);
    });
  })
  return 'Successfully updated favorites!'
};


module.exports = {
  insertUser: insertUser,
  updateUser: updateUser,
  getUserFavorites: getUserFavorites
};