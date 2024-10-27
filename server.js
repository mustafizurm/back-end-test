const dotenv = require("dotenv");
dotenv.config({path: "./config/database.js"})

const app = require("./app");
const databaseFunck = require("./config/database");
const PORT = process.env.PORT || 3000;


// connectDatabase
databaseFunck()

app.listen(PORT,()=>{
    console.log(`server is running at http://localhot:${PORT}`);
})