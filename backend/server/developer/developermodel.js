const mongoose = require("mongoose")
const developerSchema = new mongoose.Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
    contact: { type: String, default: null },
    address: { type: String, default: null },
    developerImage: { type: String, default: null },
    qualification: { type: String, default: null },
    experience: { type: String, default: null },
    certification: { type: String, default: null },
    userType: { type: Number, default: 2 },//1- admin,2- developer,3-customer
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "users" },
    status: { type: String, default: "active" },
    createAt: { type: Date, default: Date.now() }
})
module.exports = new mongoose.model("developers", developerSchema)