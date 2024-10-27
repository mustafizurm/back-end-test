const express = require("express");
const { createOrder } = require("../controller/order.controller");
const Router = express.Router();


Router.post("/user/order/create", createOrder)


module.exports = Router;