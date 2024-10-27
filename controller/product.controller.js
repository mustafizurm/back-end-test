const Product = require("../model/product.model");
const ApiFeatures = require("../utilites/apiFeaters");

const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  await product.save();

  res.status(200).json({
    success: true,
    message: "Product create successfully",
    product,
  });
};

const getAllProducts = async (req, res, next) => {
    //  const apiFeaters = new ApiFeatures(Product.find(), req.query);
    //   const products = await apiFeaters.query;
    //     res.status(200).json({
    //       products,
    //     });

    const products = await Product.find({age:{$lt:12}});

    res.json({
        products
    })
};

module.exports = { createProduct, getAllProducts };
