const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:[true,'title is required']
    },

    ISBN:{
        type:String,
        required:[true,'ISBN is required']
    },

    author:{
        type:String,
        required:[true,'author is required']
    },

    description:{
        type:String,
        required:[true,'description is required']
    },

    publishedDate:{
        type:Date,
        required:[true,'publishedDate  is required']
    },

    publisher:{
        type:String,
        required:[true,'publisher name is required']
    }
});

const bookModel = mongoose.model('bookData',userSchema);
module.exports = bookModel;