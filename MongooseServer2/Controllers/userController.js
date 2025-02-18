import User from "../Model/userModel.js"
import jwt from 'jsonwebtoken'
import {generateToken} from "../utils/jwt.js"
import createhashPassword from "../utils/bcrypt.js"
import bcrypt from 'bcrypt'
const saltRound=10//bcrypt encryption rounds
const  secretKey="subu@1213"
  export let getallUsers=async(req,res)=>{
    try {
        const allusers=await User.find()
        res.status(200).send(allusers)
        
    } catch (error) {
        res.status(500).send({error:"Something Went wrong",msg:error.message})
    }
}
 export const createUser=async(req,res)=>{//registration
    try {
        let data=req.body;
        console.log(data.password);
        // const hashedPassword= await bcrypt.hash(data.password,saltRound)
        const hashedPassword= await createhashPassword(data.password)
        console.log(hashedPassword);
        const userData=new User({...data,password:hashedPassword});
        await userData.save()
        res.status(201).send({message:"user Added Succesfully"})
        
    } catch (error) {
        res.status(500).send({error:"Something Went wrong",msg:error.message})
    }
 }
 export const userLogin= async(req,res)=>{
    try {
        const{email,password}=req.body
        if(email&&password){
           const isUser=await User.findOne({email})
           if(isUser){
            //bcrypt  to compare password
            const isMatched=await bcrypt.compare(password,isUser.password)
            if(isMatched){
                // const token=await jwt.sign({_id:isUser._id},secretKey,{expiresIn:"600"})
                //JWT passsing
                const token=await generateToken({_id:isUser._id},60*60*24)
                res.cookie("token",token,{httpOnly:true,maxAge:1000*60*60*24*7})
                res.status(200).send({message:"User login succesfully"})
            }
            else{
                res.status(400).send({message:"Password is not matching"})
            }
 
           }
           else{
            res.status(400).send({error:"User not found"})
           }
        }
        else{
            res.status(400).send({error:"provide all required fields"})
        }
        
    } catch (error) {
        res.status(500).send({error:"Something Went wrong",msg:error.message})
    }
 }
export const userLogout=async(req,res)=>{
    try {
        // console.log(req.cookies)
        res.clearCookie("token")
        res.status(200).send(({message:"Logout succesful"}))
    } catch (error) {
        res.status(500).send({error:"something went wrong",msg:error.message})
    }
}
export  const updateUser=async (req,res)=>{
    try {
        // const {email}=req.query
        // const isUser=await User.findOne({email})
        const {_id}=req//id coming from previous midddle ware
        let isUser=await User.findByID(_id)//find the document by using is
        if(isUser){
            await User.updateOne({email},{$set:{...req.body}})
            res.status(200).send({message:"user details update"})
        }
        else{
            res.status(400).send({error:"invalid email",message:"user not register"})
        }
    } catch (error) {
        res.status(500).send({error:"Something went Wrong",msg:error.message})
    }
}