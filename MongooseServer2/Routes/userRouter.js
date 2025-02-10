import express from 'express';
import { getallUsers,createUser } from '../Controllers/userController.js';
const userRoutes=express.Router()

// user API's
//get all user data
userRoutes.get('/allusers',getallUsers)
//create/add user
userRoutes.post('/create',createUser)

export default userRoutes;