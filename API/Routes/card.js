const express = require("express")
const router  = express.Router();
const crd = require("../Controllers/card")
const Authent = require("../Middlewares/auth")

router.post("/add",Authent.Authenticated,crd.addCard)
router.get("/user",Authent.Authenticated,crd.userCard)
router.delete("/remove/:productId",Authent.Authenticated,crd.removeProFromCard)
router.delete("/clear",Authent.Authenticated,crd.ClearCard)
router.post("/--qty",Authent.Authenticated,crd.DecreaseProQty)


module.exports=router