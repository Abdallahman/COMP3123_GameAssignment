const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// *********** Include the Api routes ***********
const gameRoutes = require("./routes/game");

// *********** Connect to Mongo  ***********
console.log('Attempting to connect to mongoose');

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds261917.mlab.com:61917/game_assignment')
  .then(() => {
    console.log('Connected to Mongo database!');
  })
  .catch(err  => {
    console.error('App starting error:', err.stack);
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  next();
});

// ******** Setup the Api routes ***********
app.use("/api/game", gameRoutes);

module.exports = app;
