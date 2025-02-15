import jwt from 'jsonwebtoken'
 const secretKey="subu@123"

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