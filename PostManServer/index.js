import express from 'express'
const app=express()
//Middlewares
app.use(express.json())
 app.use(express.urlencoded({extended:true}))

//API's
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.post('/data',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
    
})
app.post('/urlData',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
    
})

//Routes
const  productsRouter=express.Router()//Declaration of a router
app.use('/product',productsRouter);//use of router
productsRouter.get('/',(req,res)=>{
    res.send({msg:"product router is working"})
})

productsRouter.post('/add',(req,res)=>{
    console.log(req.body);
    
    res.send(req.body)
})





app.listen(6969,"localhost",()=>{
    console.log("App is running at http://localhost:6969");
    
})