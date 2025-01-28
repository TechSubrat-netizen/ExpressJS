import express from 'express'
const app=express()
//sending file to the browser
app.get('/',(req,res)=>{
    res.sendFile("C:/Users/subra/Desktop/Jspider/ExpressJS/MyExpressServer/home.html")
})
// app.get('/style.css',(req,res)=>{
//     res.sendFile(' C:/Users/subra/Desktop/Jspider/ExpressJS/MyExpressServer/style.css')
// })
app.get('/login',(req,res)=>{
    res.sendFile("C:/Users/subra/Desktop/Jspider/ExpressJS/MyExpressServer/login.html")
})
//Send Data To The Client Or Web Page
app.get('/getData',(req,res)=>{
    let data={name:"Akash",age:20}
    res.json(data)
})
// Getting Data From The Browser
app.use(express.json())
app.post('/login',(req,res)=>{
let data=req.body
console.log(data);

})

app.listen(4000,"localhost",()=>{
    console.log("Server is working at http://localhost:4000");
    
})