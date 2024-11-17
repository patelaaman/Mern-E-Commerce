const express = require("express")
const route = express.Router();
const regis = require("../Controllers/user")
//Register Here 
route.post("/register",regis.register)


module.exports = route