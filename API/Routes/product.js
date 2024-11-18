

const express  = require("express");
const router = express.Router();

const addp = require("../Controllers/product")

// Add Product

router.post("/add",addp.addProduct)
router.get("/all",addp.getProduct)
router.get("/:id",addp.getProductById)
router.put("/:id",addp.UdpateProductById)
router.delete("/:id",addp.DeleteProductById)
// get Product 


module.exports = router