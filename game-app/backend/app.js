const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
let port = process.env.PORT || 4000;
const server = app.listen(function(){
  console.log('Listening on port' + port);

});

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

//**************Mongoose Schema ************* */

/* 
**Table components: player_table => playerId, rank,score,time,
gamesPlayedId,status  ***   

*/

var Schema = mongose.Schema;
var playerSchema = new Schema({
  playerId:{type: Number,unique}, 
  playerName: {type: String,require:true},
  rank: Number,
  score: Number, 
  time: Date, 
  gamesPlayedId: Number,
  status:{type: String,require:true}
});
 var Player = mongoose.model("Player",playerSchema);





  // ******** Setup the Api routes ***********
app.use("/api/game", gameRoutes);

module.exports = app;
