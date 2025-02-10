import mongoose from 'mongoose'
 const url='mongodb://127.0.0.1:27017/MyDatabase2';
 //Connection function
const connectDb=async()=>{
    try {
        await mongoose.connect(url);
        console.log("Db is connected");
        
        
    } catch (error) {
        console.log("Error in  db connection",error);
        
    }
}
export default connectDb