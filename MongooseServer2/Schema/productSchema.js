import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String},
    description:{type:String},
    discount:{type:Number}
})
export default productSchema