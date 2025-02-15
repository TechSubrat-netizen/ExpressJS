import  express from 'express';
import mongoose from 'mongoose';
const app=express()
//Middlewares//Routes//API's
app.use(express.json())//Json Parser

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
 //Declaring  Schema validation for collection
 const userSchema= new mongoose.Schema({
        name:String,//Datatypes
        email:{type:String,required:true,unique:true},//Multiple properties
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
//  async function getData(){
//     const data= await userModel.find()
//     console.log("users data",data)
//  }
//  getData()
///ApI's Crud Operation using mongodb Collection
// Get All Data
app.get('/allData', async (req,res)=>{
    try{
             const response=await userModel.find()
             res.status(200).send(response)
    }
   catch(error){
    res.status(500).send(error)
   }

})
//Create document
app.post('/add',async(req,res)=>{
    try{
        let data=req.body
        //Save This  to mongodb
        // const newUser=new userModel(data)//creating an instance of userModel
        // const response= await newUser.save()//!Saving the instance
        //Another Way
        const response= await userModel.insertOne(data)
        res.status(201).send(response)

    }
    catch(error){
        res.status(500).send(error)
    }
})
//Params:-For inserting dynamic value
// app.post('/user/:name',(req,res)=>{
//     console.log(req.params)
// })
//Update the value using params 
app.post('/user/:name',async(req,res)=>{
    try{
    const {name}=req.params
    const data=req.body
    const response=await userModel.updateOne({name:name},{$set:{...data}})
    res.status(200).send(response)
    }
    catch(error){
        res.status(500).send(error)
    }

})
//Delete the value from mongodb
app.delete('/deleteuser',async(req,res)=>{
try{
    const data=req.query
    const response=await userModel.deleteOne({...data});
     res.status(200).send(response)
}
catch(error){
    res.status(500).send(error)
}
})

app.listen(7888,"localhost",()=>{
    console.log("server is running on http://localhost:7888");
    
})