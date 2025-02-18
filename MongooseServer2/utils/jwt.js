import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()
 const secretKey=process.env.SECRET_KEY||"your key"

 //Generate token
export const generateToken= async (data,expiresTime)=>{
    return await jwt.sign(data,secretKey,{expiresIn:expiresTime})
 }


 //Verify jwt token
 export const verifyjwt=(token)=>{
   try {
      const {id}=jwt.verify(token,secretKey)
      return id;  
   } catch (error) {
      throw new Error (error.message)
   }
  

 }