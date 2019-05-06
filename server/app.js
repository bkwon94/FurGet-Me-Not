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

// CREATE A NEW USER IN DATABASE
app.post('/users', async (req, res) => {
  let userData = req.body;
  console.log(userData);
  let postedUser = await db.insertUser(userData);
  await res.send(postedUser);
});

// ADD TO FAVORITES OF USER IN DATABASE
app.put('/users', async (req, res) => {
  
});

module.exports = app;