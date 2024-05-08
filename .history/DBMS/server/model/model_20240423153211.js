const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    entreprise : {
        type : String,
        required: true
    },
    email : {
        type: String,
       
    },
    telephone : {
        type: String,
        
    },
    message : {
        type : String,
       
    },

})

const Userdb = mongoose.model('Contact', schema);

module.exports = Userdb;