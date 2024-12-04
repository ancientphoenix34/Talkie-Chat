const express=require('express')
require('dotenv').config();
const cors=require('cors');
 const chats =require("./Data/data")


//creating instance of express
const app=express();
app.use(cors({ credentials: true,  origin: 'http://localhost:3000' }));

//req and res are callbacks
app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

// app.get('/api/chat/:id',(req,res)=>{
//     const singleChat=chats.find(chat=>chat._id===req.params.id);
//     res.send(singleChat);
// })




app.listen(process.env.PORT,console.log(`server is running on ${process.env.PORT}`));