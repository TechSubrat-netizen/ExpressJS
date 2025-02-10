import User from "../Model/userModel.js"
  export let getallUsers=async(req,res)=>{
    try {
        const allusers=await User.find()
        res.status(200).send(allusers)
        
    } catch (error) {
        res.status(500).send({error:"Something Went wrong",msg:error.message})
    }
}
 export const createUser=async(req,res)=>{
    try {
        const userData=new User(req.body);
        await userData.save()
        res.status(201).send({message:"user Added Succesfully"})
        
    } catch (error) {
        res.status(500).send({error:"Something Went wrong",msg:error.message})
    }
 }