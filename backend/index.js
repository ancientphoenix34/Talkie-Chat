const express=require('express')
require('dotenv').config();
const cors=require('cors');
const chats =require("./Data/data")
const connectDB=require('./config/Db');
const userRoutes=require('./Routes/userRoutes');
const { notFound, errorHandler } = require('./Middleware/errorMiddleware');


//creating instance of express
const app=express();
app.use(cors({ credentials: true,  origin: 'http://localhost:3000' }));
app.use(express.json());   //this will make backend accept json data
connectDB();





app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(process.env.PORT,console.log(`server is running on ${process.env.PORT}`));