const mongoose= require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/4UTechXData")
.then(()=>{
    console.log("connection sucssesful");
})
.catch((error)=>{
    console.log("connection failed");
})