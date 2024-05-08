const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    entreprise : {
        type : String,
       
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

const Userdb = mongoose.model('Contacts', schema);

module.exports = Userdb;