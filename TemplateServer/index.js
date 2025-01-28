import express from 'express'
const app=express()



//Set the Template Engine
app.set("view engine","ejs")//Declaring ejs as the template engine

app.set("Views","./Pages")//Setting template file folder





//Middleware
app.use(express.json())//json Parser
app.use(express.static("./Views"))// serving static files



//ApIS
app.get('/',(req,res)=>{
   res.render("Home.ejs",{name:"Akash",Age:90})
})
app.get('/about',(req,res)=>{
    res.render("About",{fruits:["A","B","C","D"]})
})
app.get('/login',(req,res)=>{
    res.render('Login',{title:"login Page"})
})
// Partials


app.listen(8989,"localhost",()=>{
    console.log("server is running on http://localhost:8989");
    
})