import express from 'express'
const app=express()
app.use(express.static('C:/Users/subra/Desktop/Jspider/ExpressJS/PageRouting/CSS'))
app.get('/',(req,res)=>{
    res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/PageRouting/Pages/Home.html')
})
app.get('/index',(req,res)=>{
    res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/PageRouting/CSS/index.css')
})
app.get('/about',(req,res)=>{
    res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/PageRouting/Pages/About.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/PageRouting/Pages/Contact.html')
})
app.get('/signup',(req,res)=>{
    res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/PageRouting/Pages/Signup.html')
})


app.listen(1000,"localhost",()=>{
    console.log("server is starting at http://localhost:1000");
    
})