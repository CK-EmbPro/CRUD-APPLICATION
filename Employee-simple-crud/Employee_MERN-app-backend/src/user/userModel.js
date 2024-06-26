const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name :{
        type: String, 
        required: true
    },
    
    address: {
        type: String, 
        required: true
    }, 

    phone: {
        type: String, 
        required: true
    }

})


module.exports = mongoose.model("employees", userSchema);