const express = require('express');
const { createProduct, getAllProducts } = require('../controller/product.controller');
const Router = express.Router();

Router.post("/create", createProduct)
Router.get("/products", getAllProducts)
Router.get("/product/:id", async(req,res,next)=>{})
Router.put("/product/:id", async(req,res,next)=>{})
Router.delete("/product/:id", async(req,res,next)=>{})

module.exports = Router;