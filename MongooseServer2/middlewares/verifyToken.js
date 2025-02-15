import { verifyjwt } from "../utils/jwt.js"
const verifytoken=async (req,res,next)=>{
    try {
        const {token}=req.cookies
        if(token){
            //verify the jwt token
            const id=verifyjwt(token)
            // console.log(id)
            //set id in the req object
            req.id=id
            //call next function to move to next middleware
            next()
        }
        else{
            res.status(400).send()
        }
        console.log(token)
    } catch (error) {
        res.status(400).send({error:"verification failed",message:error.message})
    }
}
export default verifytoken