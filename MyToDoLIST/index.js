import express from 'express';
import fs from 'fs'
const app=express()
//Middleware
app.use(express.static('C:/Users/subra/Desktop/Jspider/ExpressJS/MyToDoLIST/Pages'));
app.use(express.json())

//API
app.get('/',(req,res)=>{
  res.sendFile('index.html')
})

app.post('/sendData',(req,res)=>{
    let data=req.body;
     console.log(data);
     let tasks= JSON.parse(fs.readFileSync('./Pages/todo.json',data,'utf-8'))
     tasks.push(data)
     fs.writeFileSync('./Pages/todo.json',JSON.stringify(tasks),'utf-8')
     res.send({message:"Message recieved succesfully"})
     
     
})
app.get('/getData',(req,res)=>{
    let sendData=JSON.parse(fs.readFileSync('./Pages/todo.json','utf-8'))
    res.status(200).send(sendData)
})





//Server running
app.listen(4545,"localhost",()=>{
    console.log("server is running at http://localhost:4545");
    
})