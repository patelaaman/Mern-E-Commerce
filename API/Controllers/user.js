const user = require("../Models/User")
const bcrypt = require("bcryptjs")

const register= async(req,res)=>{
    const {name,email,password,} = req.body;

    try{
       let userdata = await user.findOne({email})
       if(userdata) return res.json({message:"User Already Exist ", success:false})
      
     const  hashPass = await bcrypt.hash(password,10)
      userdata = await user.create({
        name:name,
        email:email,
        password:hashPass
     });
     res.json({message:"User Register SuccesFully.....!",userdata, success:true})
    }catch(error){
            res.json({message:error.message})
    }
}

module.exports ={
     register
}