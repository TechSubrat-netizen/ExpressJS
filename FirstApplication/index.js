const express=require('express');
const app=express()
app.get('/',(req,res)=>{
    res.send("Hello From Home Page")
})
app.listen('4000',"localhost",()=>{
    console.log("Server is starting at http://localhost:4000 ");
    
})