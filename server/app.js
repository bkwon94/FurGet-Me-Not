const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

// GET ALL FAVORITES OF USER
app.get('/users/:user', async(req, res) => {
  const { user } = req.params;
  console.log(user);
  if (user !== 'guest') {
    // if user registered, fetch favorites
    let favorites = await db.getUserFavorites(user);
    await res.send(favorites);
  }
})

// CREATE A NEW USER IN DATABASE
app.post('/users', async (req, res) => {
  let userData = req.body;
  console.log(userData);
  let postedUser = await db.insertUser(userData);
  await res.send(postedUser);
});

// ADD TO FAVORITES OF USER IN DATABASE
app.put('/users', async (req, res) => {
  console.log(req.body);
  const { username, breed, name, url } = req.body;
  console.log(name);
  let postedFavorite = await db.updateUser(username, breed, name, url);
  await res.send(postedFavorite);
});

module.exports = app;