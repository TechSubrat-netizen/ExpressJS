import mongoose from "mongoose";
import productSchema from "../Schema/productSchema.js";

const Product=mongoose.model("products",productSchema)
export default Product