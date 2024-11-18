const express = require("express")
const route = express.Router();
const regis = require("../Controllers/user")
//Register Here 
route.post("/register",regis.register)

// Login User
route.post("/login",regis.Login)

// get all Users
route.get("/all",regis.Users)
module.exports = route