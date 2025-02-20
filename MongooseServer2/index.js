import express from 'express';
import mongoose from 'mongoose';
import connectDb  from './config/db.js'
import userRoutes from './Routes/userRouter.js';
import productRouter from './Routes/productRouter.js';
import cookieParser from 'cookie-parser';
import {config} from 'dotenv'
const app=express()

//Middlewares
app.use(express.json())//Json parser
app.use(cookieParser())//CookieParser

//dotenv config
config()
//accesing the .env variable
// console.log(process.env.MY_VAR)

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