const mongoose = require('mongoose');


var Game = mongoose.model('Game', {
    title: { type: String },
    platform: { type: String },
    genre: { type: String },
    rating: { type: String },
    publisher : { type: String },
    release : { type: Number },
    status : { type: String }  
}); 

module.exports = {
    Game 
}