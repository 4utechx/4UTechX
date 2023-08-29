const mongoose = require("mongoose");

const TechXSchema = new mongoose.Schema({
    name: {
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
        required: true,
    },
    password: {
         type: String,
         required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    }
});

const empCollection = new mongoose.model("empcollection",TechXSchema);
module.exports = empCollection;