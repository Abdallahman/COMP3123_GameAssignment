const mongoose = require('mongoose');


var Admin = mongoose.model('Admin', {
    _id : { type: String },
    username: { type: String },
    password: { type: String },
}); 

module.exports = {
    Admin 
}