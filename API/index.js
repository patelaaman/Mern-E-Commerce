const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
// User Router
const userRouter = require("./Routes/user")
// Product Router 
const productRouter = require("./Routes/product")
// Card Router 
const crdRouter = require("./Routes/card")
const port =1000;

//  Home Testing route 
app.get("/",(req,res)=>{
    res.json({message:"Thisi is home Route"})
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// Mongoose Connected
mongoose.connect("mongodb+srv://amanpatel51251:HP2oLxIyzDDaA3Et@ecomproject.vgpvp.mongodb.net/?retryWrites=true&w=majority&appName=EComProject",{dbName:"MernProject"}).then(()=>{
    console.log("MongoDb Connected Succesfully")
}).catch((err)=>{
    console.log(err);
})

// User Router 
app.use("/api/user",userRouter)

// Product Router
app.use("/api/product",productRouter)

// card Router 
app.use("/api/card",crdRouter)

app.listen(port ,()=>{
    console.log(`Server is Runnig on Port ${port}`)
} )
