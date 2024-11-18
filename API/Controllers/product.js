const products = require("../Models/Product")

// Add Product
const addProduct =async (req,res)=>{
    const {title,description,price,category,qty,imgsrc} = req.body;
    try{
       let prodata = await products.create({
        title,description,price,category,qty,imgsrc
       })
       res.json({message:"Product Add SuccesFully..!", prodata})
    }
    catch(error){
         res.json(error.message)
    }
}

// Get Product
const getProduct = async (req,res)=>{
     let prodata = await products.find().sort({createdAt:-1})
     res.json({message:"All Products", prodata})
}

// Find Product By ID
const getProductById = async (req,res)=>{
    const id = req.params.id;
    let prodata = await products.findById(id);
    if(!prodata)  return res.json({message:"Invalid Id "})
    res.json({message:"All Products", prodata})
}

// Update Product By Id 
const UdpateProductById = async (req,res)=>{
    const id = req.params.id;
    let prodata = await products.findByIdAndUpdate(id,req.body,{new:true});
    if(!prodata)  return res.json({message:"Invalid Id "})
    res.json({message:"Product has Been Updated", prodata})
}

// Delete Product By Id 
const DeleteProductById = async (req,res)=>{
    const id = req.params.id;
    let prodata = await products.findByIdAndDelete(id);
    if(!prodata)  return res.json({message:"Invalid Id "})
    res.json({message:"Your Product has Been Deleted", prodata})
}


module.exports ={
   addProduct,
   getProduct,
   getProductById,
   UdpateProductById,
   DeleteProductById
}