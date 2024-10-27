
const mongoose = require('mongoose');

const databaseFunck = () =>{
    mongoose.connect("mongodb://localhost:27017/Ecommerce")
    .then((data)=>{
        console.log(`database is connected with ${data.connection.host}`);
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports = databaseFunck;