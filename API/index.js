const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
// User Router
const userRouter = require("./Routes/user")
const port =1000;

//  Home Testing route 
app.get("/",(req,res)=>{
    res.json({message:"Thisi is home Route"})
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// Mongoose Connected
mongoose.connect("mongodb+srv://amanpatel51251:jvaXJAdnC4X6H3Nx@mernproject.bn6bm.mongodb.net/",{dbName:"MernProject"}).then(()=>{
    console.log("MongoDb Connected Succesfully")
}).catch((err)=>{
    console.log(err);
})

app.use("/api/user",userRouter)

app.listen(port ,()=>{
    console.log(`Server is Runnig on Port ${port}`)
} )
