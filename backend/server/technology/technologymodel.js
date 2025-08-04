const mongoose = require("mongoose");

const technologyschema = new mongoose.Schema({
    name: { type: String, default: null },
    technologyImage:{type:String,default:"no_img.jpg"},
    description: { type: String, default: null },
    status: { type: String, default: "active" },
    createAt: { type: Date, default: Date.now }
});

module.exports = new mongoose.model("technologies", technologyschema);