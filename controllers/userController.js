const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//get all user data
exports.getAllUser = async(req,res)=>{
    try{
         const user = await userModel.find({});
         return res.status(201).send({
            message:'Generated All User Successfully',
            success:true,
            userCont : user.length,
            user
         })
    }catch(err){
        console.log('callbacke error',err)
    }
}

//for register
exports.registerController = async (req,res)=>{
    try{
        const {username,password,cpassword}=req.body
        console.log(req.body);
        //add the validation part
        if(!username || !password || !cpassword){
            return res.status(404).send({
                message:'All fields are required'
            })
        }

        if(password !== cpassword){
            return res.status(200).send({
                message:'password and confirm passwords are doesnot match'
            })
        }

        //for existing user
        const existingUser = await userModel.findOne({username});
        if(existingUser){
            return res.status(400).send({
                message:'User is already exists try different id',
                success:false
            })
        }

        //for password security
        const hashPassword = await bcrypt.hash(password,10);//10 is a salt value

        //we have save these user information
        const user = new userModel({username,password:hashPassword,cpassword:hashPassword});
        await user.save();

        //generate token 
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);
        return res.status(200).send({
            success:true,
            message:'user created successful',
            token
        })

    }catch(err){
        console.log('err',err)
    }
}

//for login 

exports.loginController =async(req,res)=>{
    try{
        const {username,password} = req.body;
        //validation
        if(!username || !password){
            return res.status(404).send({
                sucess:false,
                message:'username and password doesnot exists'
            })
        }
        
        const user = await userModel.findOne({username});
        if(!user){
            return res.status(404).send({
                messagge:'userName doesnot exists'
            })
        }

        //password
        const isMatchPassword = await bcrypt.compare(password,user.password)
        if(!isMatchPassword){
            return res.status(404).send({
                success:false,
                message:'password does not match'
            })
        }

        //token generate
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);
        return res.status(200).send({
            sucess:true,
            message:'Login successfully',
            token
        })

        

    }catch(err){
        console.log('error',err);
    }
}