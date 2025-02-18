import mongoose from 'mongoose'
import {config} from 'dotenv'
 config()


 const db_url=process.env.DB_URL || "mongodb://127.0.0.1:27017/myDB2"

 //Connection function
const connectDb=async()=>{
    try {
        await mongoose.connect(db_url);
        console.log("Db is connected");
        
        
    } catch (error) {
        console.log("Error in  db connection",error);
        
    }
}
export default connectDb
