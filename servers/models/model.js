const mongoose = require("mongoose");

const TechXSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        unique: true,
        required: true,
    },
});

const empCollection = new mongoose.model("empcollection",TechXSchema);
module.exports = empCollection;