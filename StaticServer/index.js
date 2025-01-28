// const express= require('express')
import express from 'express'
const app=express()
//Static Folder(exptress.static) i
app.use(express.static('C:/Users/subra/Desktop/Jspider/ExpressJS/StaticServer/Public'))
//express.json() middleware providing
app.use(express.json())
//urlencoded middle ware provideing
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
 
    res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/StaticServer/index.html')
    
})
// app.get('/index.css',(req,res)=>{
 
//     res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/StaticServer/index.css')
    
// })
// app.get('/image',(req,res)=>{
//     res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/StaticServer/Crypto.jpeg')
// })
// Send data to the browser from server
app.get('/data',(req,res)=>{
    res.status(200).send(`{name:"Kunna",add:"kerala"}`)
})
//Post API
app.post('/data',(req,res)=>{
    console.log(req.body);//payload need to parse the data
    
})
 app.post('/urlData',(req,res)=>{
    console.log(req.body);
    
 })



app.listen(9004,"localhost",()=>{
    console.log("server is running at http://localhost:9004");
})