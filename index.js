const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//configur file
dotenv.config();

//routes are imported from here
const userRoute = require('./routes/userRoutes')

//mongodb connect
connectDB();

const app = express();


//added middleware here
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(201).send({
        message:'Hello Sourabh'
    })
});


//routing
app.use('/api/v1/user',userRoute)

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
