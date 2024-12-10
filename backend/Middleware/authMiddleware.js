const jwt=require('jsonwebtoken');
const User=require('../Models/userModel');
const asyncHandler=require('express-async-handler');

const protect=asyncHandler(async(req,res,next)=>{


    if(
        req.headers.authorization 
        &&
        req.headers.authorization.startsWith('Bearer')
    ){
        try{
            // Bearer #GVhjvvyynjou
            const token=req.headers.authorization.split(" ")[1];

            //verify token
            const decoded=jwt.verify(token,process.env.JWT_SECRET);

            req.user=await User.findById(decoded.id).select('-password');
            
            next();
        }catch(error){
            console.log(error);
            res.status(401);
            throw new Error('Not authorized,token failed');
        }
    }
});


module.exports={protect};

