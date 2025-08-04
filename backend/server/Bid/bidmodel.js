const mongoose = require("mongoose")
const bidschema = new mongoose.Schema({
    clientId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    postId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"posts"},
    developerId:{type:mongoose.Schema.ObjectId,default:null,ref:"developers"},
    bidAmount:{type:String,default:null},
    description:{type:String,default:null},
    deadlineEstimate:{type:String,default:null},
    status:{type:String,default:"Pending"},
    createAt:{type:Date,default:Date.now()}
})
module.exports=new mongoose.model("bids",bidschema)