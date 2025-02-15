import express from 'express';
import mongoose from 'mongoose';
import connectDb  from './config/db.js'
import userRoutes from './Routes/userRouter.js';
import productRouter from './Routes/productRouter.js';
import cookieParser from 'cookie-parser';
const app=express()

//Middlewares
app.use(express.json())//Json parser
app.use(cookieParser())//CookieParser

//API's
app.get('/',(req,res)=>{
    res.send("Server is at work")
})
//Routes
app.use('/user',userRoutes)
app.use('/products',productRouter)





// Database Connection
connectDb()

///listen
app.listen(8909,"localhost",()=>{
    console.log("server is running on http://localhost:8909");
    
})