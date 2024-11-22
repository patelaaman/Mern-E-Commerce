const user = require("../Models/User")
const bcrypt = require("bcryptjs")
const  jwt = require("jsonwebtoken")

// Registration Here
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
// Login Here
const Login  = async(req,res)=>{
   const {email,password} = req.body;
  try{
        let loginUser = await user.findOne({email});
        if(!loginUser) return res.json({message:"User Not Find", success:false})
          const validPassword = await bcrypt.compare(password,loginUser.password);
        if(!validPassword) return res.json({message:"Invalid Credential ", success:false})

          const token = jwt.sign({userId:loginUser._id},"Ak12345",{
            expiresIn:"365d"
          })

          res.json({message:`Welcome ${loginUser.name}`, token,success:true})
  }
  catch(error){
      res.json({message:error.message})      
  }
}

// get All Users
const Users = async (req,res)=>{
   try{
    let data = await user.find().sort({createdAt:-1})
    res.json(data)
   }
   catch(error){     
       res.json(error.message)
   }
}

const Profile =async(req,res)=>{
  res.json({userId:req.user})
}

module.exports ={
     register,
     Login,
     Users,
     Profile
}