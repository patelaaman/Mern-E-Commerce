const jwt = require("jsonwebtoken")
const User = require("../Models/User")
const  Authenticated =async (req,res,next)=>{
    const token = req.header("Auth")

    if(!token) return res.json({message:"Login First"})

        const decoded = jwt.verify(token,"Ak12345")

      //  console.log(decoded)

      const id = decoded.userId
      let user = await User.findById(id)
      
      if(!user) return res.json({message:"User Not Exist"})

        req.user= user

        next()
}

module.exports ={
    Authenticated
}