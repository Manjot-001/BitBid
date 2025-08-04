const mongoose = require("mongoose")
const postschema = new mongoose.Schema({
    title:{type:String,default:null},
    technologyId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"technologies"},
    budget:{type:String,default:null},
    deadline:{type:String,default:null},
    clientId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    description:{type:String,default:null},
    status:{type:String,default:"Active"},
    createAt:{type:Date,default:Date.now()}
})
module.exports=new mongoose.model("posts",postschema)