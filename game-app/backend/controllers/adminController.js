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

module.exports = router;