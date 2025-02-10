import mongoose, { Mongoose } from "mongoose";
const userSchema= new mongoose.Schema({
    firstName:{type:String,required:true,minLength:4},
    lastname:{type:String},
    email:{type:String,required:true,unique:true},
    mobile:{type:Number},
    password:{type:String,minLength:6},
    gender:{type:String,enum:["male","female"]},
    address:{
        city:String,
        zip:Number,
        state:String
    }
})
export default userSchema;