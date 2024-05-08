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
      
       
    },
    message : {
        type : String,
        
    },

})

const Userdb = mongoose.model('Contact', schema);

module.exports = Userdb;