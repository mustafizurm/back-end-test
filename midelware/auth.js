const jwt = require("jsonwebtoken");
const IsAuthUsers = async (req,res,next) =>{
    const token = req.cookie;

    if(!token){
        res.json({
            message: "please Login"
        })
    }

    // const decodedUser = jwt.verify(token, process.env.SECRET_KEY);

    // req.user = await User.findOne(decodedUser._id)

    next();

}

module.exports = {IsAuthUsers}