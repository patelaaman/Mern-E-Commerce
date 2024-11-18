const Card  = require("../Models/Card")
//   Add To Card
const addCard = async(req,res)=>{
    const {productId,title,price,qty,imgSrc} = req.body;
    const  userId = "673b46fcdfd639c2fb26893e"

    let carddata = await Card.findOne({userId});
    if(!carddata){
        carddata = new Card({userId,items:[]})
    }

    const itemIndex = carddata.items.findIndex((item)=>item.productId.toString()===productId)
    if(itemIndex>-1){
        carddata.items[itemIndex].qty += qty;
        carddata.items[itemIndex].price += price*qty
    }else{
        carddata.items.push({productId,title,price,qty,imgSrc})

    }


    await carddata.save();
    res.json({message:"Item Added To Cart ",carddata})
}


// get User Card
const userCard  = async (req,res)=>{
     const  userId = "673b46fcdfd639c2fb26893e"

     let data = await Card.findOne({userId})
     if(!data) return res.json({message:"cart Not Found"})
        res.json({message:"User Cart :",data})
}

// Remove Product From Cart User Card
const removeProFromCard  = async (req,res)=>{
    const productId = req.params.productId
    const  userId = "673b46fcdfd639c2fb26893e"

    let data = await Card.findOne({userId})
    if(!data) return res.json({message:"cart Not Found"})

        data.items = data.items.filter((item)=>item.productId.toString() !== productId)
        await data.save();
       res.json({message:"Product Remove From Cart"})
}


module.exports ={
     addCard,
     userCard,
     removeProFromCard
}