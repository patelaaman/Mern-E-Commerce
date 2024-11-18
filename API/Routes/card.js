const express = require("express")
const router  = express.Router();
const crd = require("../Controllers/card")
router.post("/add",crd.addCard)
router.get("/user",crd.userCard)
router.delete("/remove/:productId",crd.removeProFromCard)

module.exports=router