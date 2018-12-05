const express = require('express');
var router = express.Router();

var { Player } = require('../models/players');
var ObjectId = require('mongoose').Types.ObjectId;

// -> localhost:3000/players/
router.get('/', (req, res) => {
    Player.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log("Error in Retrieving Players"+ JSON.stringify(err, undefined, 2)
      )}    
    });
});


router.get('/:id', (req, res) => {
 if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    Player.findById(req.params.id, (err, doc) => {
        if(!err) { res.send(doc);}
        else { console.log("Error in Retrieving Players"+ JSON.stringify(err, undefined, 2));}
    });
});

router.post('/', (req, res) => {
    var play = new Player({
    player_name: req.body.player_name,
    rank: req.body.rank,
    score: req.body.score,
    time: req.body.time,
    game_Played :req.body.game_Played,
    status : req.body.status
    });

    play.save((err, doc) => {
        if(!err) { res.send(doc); }

        else { console.log("Error in players save: " + JSON.stringify(err, undefined, 2))}
    })
})

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    var play = new Player({
        player_name: req.body.player_name,
        rank: req.body.rank,
        score: req.body.score,
        time: req.body.time,
        game_Played :req.body.game_Played,
        status : req.body.status
        });
        Player.findByIdAndUpdate(req.params.id, { $set: play}, {new: true}, (err, doc) => {
            if(!err) { res.send(doc); }
            else { console.log("Error in players Update: " + JSON.stringify(err, undefined, 2))}                   
        })
});


router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

  Player.findByIdAndRemove(req.params.id, (err, doc) => {
    if(!err) { res.send(doc); }
    else { console.log("Error in players Delete: " + JSON.stringify(err, undefined, 2))}
  })
})
module.exports = router;