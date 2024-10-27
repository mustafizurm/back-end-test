const express = require("express");
const app = express();
// const body_parser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(express.json())
app.use(cookieParser())


// custom file require
const userRoute = require("./route/user.route");
const orderRoute = require("./route/order.route");

app.use("/api/v1", userRoute)
app.use("/api/v1", orderRoute)

module.exports = app;