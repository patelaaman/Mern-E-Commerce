const express = require("express")
const route = express.Router();
const regis = require("../Controllers/user")
const authen  = require("../Middlewares/auth")
//Register Here 
route.post("/register",regis.register)

// Login User
route.post("/login",regis.Login)

// get all Users
route.get("/all",regis.Users)

// get User Profile
route.get("/profile",authen.Authenticated,regis.Profile)
module.exports = route