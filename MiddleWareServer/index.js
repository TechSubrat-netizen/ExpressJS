import express from 'express'
const app=express()
// function msg(req,res,next){
//     console.log("hello");
//     next()
// }
// // Application level middleware
// app.use((req,res,next)=>{
//     console.log("top level Middleware");
//     next()
    
// })///app.use() common for each request
// app.get('/',(req,res,next)=>{
//     console.log("Hi1");
//     next()
    
// })
// app.get('/',(req,res,next)=>{
//     console.log("Hi2");
    
// })

// app.get('/about',msg,(req,res,next)=>{
//     console.log("this is about page");
//     res.write("Hello")
//     next()
    
// },(req,res,next)=>{
//     console.log("This is my second about page");
//     res.write("World")
//     res.end()
// })
// // ROuting_LEvel Middleware
// // Creating Router onstacnce
// const users=express.Router()
// const  products=express.Router()
// //Declaring router middleware for specific path
// app.use('/users',users);
// app.use('/products',products)
// // Router API'S
// users.get('/profile',(req,res,next)=>{//http://localhost:5000/users/profile
//     console.log("Hello from user router");
    
// })
// products.get('/info',(req,res,next)=>{//http://localhost:5000/products/info
//     console.log("hello from products router");
    
// })
// Error Handling Middleware
app.get('/',(req,res)=>{
    // throw new Error("Error in the request")
    console.log(a);
    
})
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send("Something went wrong")
    
})

app.listen(5000,"localhost",()=>{
    console.log("app is running at http://localhost:5000");
    
})