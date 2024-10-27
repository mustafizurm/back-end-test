const express = require("express");
const { register, login, logout, getMe, updatePassword, updateProfile, getAllUsers, getSingleUser, deleteUser} = require("../controller/user.controller");
const Router = express.Router();


// register, login, logout, forget-password, reset-password, get-user-details, update/change password, update profile

// admin- get_all_users, get-single_user, delete-single-user

Router.post("/user/register", register)
Router.post("/user/login", login)
Router.get("/me/logout", logout)
Router.post("/me/forget-password")
Router.put("/me/reset-password")
Router.get("/me/:id", getMe)
Router.put("/me/change-password/:id", updatePassword)
Router.put("/me/update-profile/:id", updateProfile)

// admin
Router.get("/admin/all-users", getAllUsers)
Router.get("/admin/getSing_user/:id", getSingleUser)
Router.delete("/admin/dltSing_user/:id", deleteUser)


module.exports = Router;