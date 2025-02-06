import  express from 'express';
import mongoose from 'mongoose';
const app=express()
//Middlewares//Routes//API's
app.get('/',(req,res)=>{
    res.send("hello i am sending you value from server")
})


//Mongodb Connection using mongoose
 const dbUrl="mongodb://127.0.0.1:27017/myDatabase";
 mongoose.connect(dbUrl)
 .then(()=>console.log("db connected")
 )
 .catch(err=>console.log("db connection error",err))
 //Connecting to a collection
 //Declaring  Schema
 const userSchema= new mongoose.Schema({
        name:String,//Datatypes
        email:{type:String,required:true,unique:true},//Multiple types
        age:{type:Number},
        gender:{type:String,enum:["Male","Female"]},
        address:{
            city:String,
            zip:Number,
            state:String,
            country:String
        }
 })
 //Define the model
 const userModel=mongoose.model("users",userSchema)//  user bound collection with userSchema
 async function getData(){
    const data= await userModel.find()
    console.log("users data",data)
 }
 getData()

app.listen(7888,"localhost",()=>{
    console.log("server is running on http://localhost:7888");
    
})