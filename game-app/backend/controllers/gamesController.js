const express = require('express');
var router = express.Router();

var { Game } = require('../models/games');
var ObjectId = require('mongoose').Types.ObjectId;

// -> localhost:3000/games/
router.get('/', (req, res) => {
    Game.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log("Error in Retrieving Games"+ JSON.stringify(err, undefined, 2)
      )}    
    });
});


router.get('/:id', (req, res) => {
 if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    Game.findById(req.params.id, (err, doc) => {
        if(!err) { res.send(doc);}
        else { console.log("Error in Retrieving Games"+ JSON.stringify(err, undefined, 2));}
    });
});

router.post('/', (req, res) => {
    var gmes = new Game({
    title: req.body.title,
    platform: req.body.platform,
    genre: req.body.genre,
    rating: req.body.rating,
    publisher : req.body.publisher,
    release : req.body.release,
    status : req.body.status  
    });

    gmes.save((err, doc) => {
        if(!err) { res.send(doc); }

        else { console.log("Error in games save: " + JSON.stringify(err, undefined, 2))}
    })
})

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    var gme = new Game({
        title: req.body.title,
        platform: req.body.platform,
        genre: req.body.genre,
        rating: req.body.rating,
        publisher : req.body.publisher,
        release : req.body.release,
        status : req.body.status  
       });
        Game.findByIdAndUpdate(req.params.id, { $set: gme}, {new: true}, (err, doc) => {
            if(!err) { res.send(doc); }
            else { console.log("Error in Games Update: " + JSON.stringify(err, undefined, 2))}                   
        })
});


router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

  Game.findByIdAndRemove(req.params.id, (err, doc) => {
    if(!err) { res.send(doc); }
    else { console.log("Error in Games Delete: " + JSON.stringify(err, undefined, 2))}
  })
})
module.exports = router;