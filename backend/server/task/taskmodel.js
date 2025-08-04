const mongoose = require("mongoose")
const taskschema = new mongoose.Schema({
    taskTitle: { type: String, default: null },
    taskDescription: { type: String, default: null },
    bidId: { type: String, default: null },
    developerId: { type: String, default: null },
    clientId: { type: String, default: null },
    completionDate: { type: String, default: null },
    taskAttachment: { type: String, default: null },
    status:{type:String,default:"active"},
    createAt:{type:Date,default:Date.now()}

})
module.exports = new mongoose.model("tasks", taskschema)