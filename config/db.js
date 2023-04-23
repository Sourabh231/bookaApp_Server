const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URI);
         console.log(`MongoDb Connected Successfully`);
    }catch(err){
        console.log(err,'MONGODB error')
    }
}

module.exports = connectDB;