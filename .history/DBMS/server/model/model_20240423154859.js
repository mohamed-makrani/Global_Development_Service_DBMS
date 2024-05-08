const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    entreprise : {
        type : String,
        
    },
    email : {
        type: String,
        
        unique: true
    },
    telephone : {
        type: String,
        required: true,
        unique: true
    },
    message : {
        type : String,
        required: true
    },

})

const Userdb = mongoose.model('Contact', schema);

module.exports = Userdb;