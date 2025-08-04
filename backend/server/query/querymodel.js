const mongoose = require("mongoose")
const queryschema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    subject:{type:String,default:null},
    message:{type:String,default:null},
    status:{type:String,default:"active"},
    createAt:{type:Date,default:Date.now()}
})
module.exports=new mongoose.model("queries",queryschema)