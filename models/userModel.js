const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    username:{
        type:String,
        required:[true,'Username is required']
    },

    password:{
        type:String,
        required:[true,'Password is required']
    },

    cpassword:{
        type:String,
        required:[true,'Confim password is required']
    }
});

const userModel = mongoose.model('userData',userSchema);
module.exports = userModel;