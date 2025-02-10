import Product from "../Model/productModel.js";
//Get Data from the Database
export const getProducts= async (req,res)=>{
    try {
        let response=await Product.find()
        res.status(200).send(response)
    } catch (error) {
       res.status(500).send({error:"Something went wrong"})
    }
}
//Push Datato themongodb
export const createProducts=async (req,res)=>{
    try {
        let data=req.body
        await Product.insertOne(data)
        res.status(202).send({message:"Data Inserted succesfully"})
        
    } catch (error) {
        res.status(500).send({error:"Something Went wrong",msg:"Please try again"})
    }
}