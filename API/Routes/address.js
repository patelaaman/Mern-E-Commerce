const express = require("express")
const router = express.Router();
const authen = require("../Middlewares/auth")

const addController = require("../Controllers/address")
//add Address
router.post("/add",authen.Authenticated,addController.addAddress)
//get Address
router.get("/get",authen.Authenticated,addController.GetAddress)

module.exports = router