const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/bitbid")

.then(() =>{
  console.log("connected")  
})
.catch((error)=>{
    console.log("not connected")
    console.log(error)
})