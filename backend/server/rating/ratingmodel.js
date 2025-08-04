const mongoose = require("mongoose")
const ratingschema = new mongoose.Schema({
    clientId:{type:String,default:null},
    development:{type:String,default:null},
    rating:{type:String,default:null},
    review:{type:String,default:null},
    status:{type:String,default:"active"},
    createAt:{type:Date,default:Date.now()}
})
module.exports=new mongoose.model("ratings",ratingschema)