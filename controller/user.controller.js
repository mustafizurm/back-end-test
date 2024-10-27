const User = require("../model/user.model")
const jwt = require("jsonwebtoken");

// user register
const register = async (req,res,next) =>{

    const {firstName, lastName, email, password} = req.body;

    const existingUser = await User.findOne({email: email});

    if(existingUser){
        res.status(404).json({
            success: false,
            message: "User already created"
        })
    } else{
        const user = await User.create(req.body);
        user.save();

        res.status(200).json({
            success: true,
            message: "User created successfully",
            user
        })
    }
}


// user login
const login = async (req,res,next) =>{
    const {email, password} = req.body;

    const existingUser = await User.findOne({email:email})

    if(!existingUser){
        res.status(404).json({
            success: false,
            message: "User not found, plz register"
        })
    } else{
        if(existingUser.password != req.body.password){
            res.status(404).json({
                success: false,
                message: "Password incorrect"
            })
        } else{

            const token = jwt.sign({id: existingUser._id}, 'khcsaddsaskdsfsd', {
                expiresIn: "2d"
            })


            res.cookie("token", token, {
                httpOnly: true
            }).status(200).json({
                success: true,
                message: "Login Successfully",
                token
            }) 
        }
    }
}

// logout

const logout = async(req,res,next) =>{

    res.cookie("token", null).status(200).json({
        success: true,
        message: "Logout Successfully"
    })
}

const getMe = async (req,res,next) =>{
    const id = req.params.id;
    const user = await User.findById(id);

    if(!user){
        res.status(404).json({
            success: false,
            message: "User not found"
        })
    } else{
        res.status(200).json({
            success: true,
            message: "successfully found user",
            user
        })
    }
}

// password update/change
const updatePassword = async (req,res,next) =>{
    const {oldPassword, newPassword} = req.body;

    const id = req.params.id;
    const user = await User.findById(id);

    if(!user){
        res.status(404).json({
            success: false,
            message: "User not found"
        })
    } else{
        if(oldPassword === user.password){
            const updatePasswordUser = await User.findByIdAndUpdate(id, {password: newPassword})
            res.status(202).json({
                success: true,
                message: "Password updated successfully",
                updatePasswordUser
            })
        } else{
            res.status(404).json({
                success: false,
                message: "Old password incorrect"
            })
        }
    }
        
}

// update profile
const updateProfile = async (req,res,next) =>{
    const id = req.params.id;
    const {name, email} = req.body;
    const user = await User.findById(id);
    if(!user){
        res.status(404).json({
            success: false,
            message: "User not found",
            id
        })  
    } else{
        const update = {
            name: req.body.name,
            email: req.body.email
        }
        const updatedProfile = await User.findByIdAndUpdate(id, {$set:{update}}, {new: true})
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            updatedProfile
        })
    }
}


// admin
const getAllUsers = async (req,res,next) =>{
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
}

const getSingleUser = async (req,res,next) =>{
    const id = req.params.id
    const user = await User.findById(id);

    if(!user){
        res.status(404).json({
            success: false,
            message: "user not found",
        })
    } else{
        res.status(200).json({
            success: true,
            message: "user found successfully",
            user
        })  
    }
}

const deleteUser = async (req,res,next) =>{
    const id = req.params.id;
    const user = await User.findById(id);

    if(!user){
        res.status(404).json({
            success: false,
            message: "user not found",
        })

    } else{
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "user delete successfully",
            deleteUser
        }) 
    }
}

module.exports = {register, login, logout, getMe, updatePassword, updateProfile, getAllUsers, getSingleUser, deleteUser}