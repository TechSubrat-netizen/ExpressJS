import express from 'express';
import { getallUsers,createUser,userLogin,userLogout,updateUser } from '../Controllers/userController.js';
import verifytoken from '../middlewares/verifyToken.js';
const userRoutes=express.Router()

// user API's
//get all user data
userRoutes.get('/allusers',getallUsers)
//create/add user//Registration
userRoutes.post('/create',createUser)
//Update the user
userRoutes.put('/update',verifytoken,updateUser)
//Loginuser
userRoutes.post('/login',userLogin)
//User Logout
userRoutes.get('/logout',userLogout)
export default userRoutes;