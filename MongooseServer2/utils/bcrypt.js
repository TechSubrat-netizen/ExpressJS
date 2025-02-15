import bcrypt from 'bcrypt'
const saltRound=10
 const createhashPassword=async(password)=>{
    const hashpass=bcrypt.hash(password,saltRound)
    return  hashpass
}
export  default createhashPassword