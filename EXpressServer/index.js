import express from 'express'
const app=express()

// Api use And Routing
// app.use('/',(req,res)=>{
// console.log(req.method,req.url,req.hostname,req.headers);
// res.end('hello')

// })
// app.get('/',(req,res)=>{
//     res.end("Hello World")
// })
app.get('/',(req,res)=>{
    //Getting iinformation from the request object
   
    console.log(req.method);// To get http method
    console.log(req.url);// to getting endpoint of url
    console.log(req.baseUrl);//original url
    console.log(req.hostname);//name of the domain
    console.log(req.body);//data coming  in request body(if parsed)
    console.log(req.headers);//data coming  in request order
    console.log(req.cookies);//cookies data(if parsed)
    console.log(req.ip);//ip address of thge client  system
    console.log(req.params);//key values of the parameter values from url
    console.log(req.query);// key values pairs of queries from request url    
    // Giving  the response using response object
    // res.write("hello")// sending chunk of data (need to end)
    // res.end("Hi") // End of the response(can't send response once end)
    // res.send("Hello World")//
    // res.json({name:"AAdith",age:20})//Send json body response
    // res.sendFile("Absolute path of the file")// sends a file from server
    // res.header({message:"Hi"})
    res.status(200)
    // res.download('filepath to download in client')// Giving file download
})
app.post('/',(req,res)=>{
    res.sendFile("this is the post method")
})
app.get('/about',(req,res)=>{
    res.send("Welcome to About Page")
})










app.listen(5000,"localhost",()=>{
    console.log("server is starting at http://localhost:5000");
    
})