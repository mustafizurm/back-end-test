const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type:String,
        default: "user"
    },
    flowing: [
        {
            id: {
                type: String,
                required: true
            }
        }
    ],
    flowers: [
        {
            id: {
                type: String,
                required: true
            }
        }
    ],

    createAt: {
        type: Date,
        default: Date.now()
    }
})



module.exports = mongoose.model("User", userSchema)