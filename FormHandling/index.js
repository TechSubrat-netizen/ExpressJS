  import express from 'express';
   const app=express()
//    middleware
app.use(express.urlencoded({extended:true}))


   //API's
   app.get('/',(req,res)=>{
    res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/FormHandling/Form.html')
   })
   app.post('/urlData',(req,res)=>{
    console.log(req.body);
    
   })


   app.listen(9099,"localhost",()=>{
    console.log("my server is running on  http://localhost:9099");
    
   })