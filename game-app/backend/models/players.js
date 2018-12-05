const mongoose = require('mongoose');


var Player = mongoose.model('Player', {
    player_name: { type: String },
    rank: { type: Number },
    score: { type: Number },
    time: { type: String },
    game_Played : { type: String },
    status : { type: String }  
}); 

module.exports = {
    Player 
}