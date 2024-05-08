const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    entreprise : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    telephone : {
        type: String,
        required: true,
        unique: true
    },
    

})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;