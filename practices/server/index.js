const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const cors = require("cors");
const app = express();
app.use(cors())
/**
 * @description Get all products
 * @route GET /products
 * @returns {object} 200 - All products
 * @returns {string} 404 - No product found
 */
app.get("/products", async (req, res) => {
  const product = await Product.find();
  if(product.length === 0) {
    res.status(404).json({ message: "No product found" });
  }
  if (!product) {
    return res.status(404).json({ message: "No product found" });
  }
  res.status(200).json({message: "All products", product});
});

mongoose.connect("mongodb://127.0.0.1:27017/moon-tech").then(()=> {
    console.log("database connected")
    app.listen(4000, ()=> {
        console.log("server is running")
    })
}).catch((err)=> {
    console.log(err)
})
