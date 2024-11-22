const Address = require("../Models/Address")

const addAddress = async (req, res) => {
    let { fullname, address, city, state, country, pincode, phoneNumber } = req.body;
    let userAddress = await Address.create({
        userId: req.user,
        fullname,
        address,
        city,
        state,
        country,
        pincode,
        phoneNumber
    })
    res.json({ message: "Address Added", userAddress })
}

const GetAddress=async (req,res)=>{
    let data = await Address.find({userId:req.user}).sort({createdAt:-1});
    res.json({message:"Address",userAddress:data[0]})
}
module.exports = {
    addAddress,
    GetAddress
}