import express from 'express'
import { getProducts,createProducts } from '../Controllers/productController.js'
const productRouter=express.Router()

productRouter.get('/getData',getProducts)
productRouter.post('/sendData',createProducts)





export default productRouter