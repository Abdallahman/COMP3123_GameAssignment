const express = require('express');
var router = express.Router();

var { Admin } = require('../models/admin');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/admin', (req, res) => {
    var adm = new Admin({
    _id: req.body._id,
    title: req.body.username,
    platform: req.body.password
});

    adm.save((err, doc) => {
        if(!err) { res.send(doc); }

        else { console.log("Error in saving admin: " + JSON.stringify(err, undefined, 2))}
    })
})

router.get('/:username'+'&'+'password', (req, res) => {
    if(!(req.params.username && req.params.password))
       return res.status(400).send('No record with given username and password : ${req.params.username} ${req.params.password}');
   
       Admin.find(req.params.username, req.params.password, (err, doc) => {
           if(!err) { res.send(doc);}
           else { console.log("Error in Retrieving Admin"+ JSON.stringify(err, undefined, 2));}
       });
   });
   

module.exports = router;