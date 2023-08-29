const express = require("express");
const app= express();
let port= 3000;
  
app.get("/", (req, res)=>{
    res.send("Hello from 4UTechX is a good");
}); 

app.listen(port, ()=>{
    console.log(`listing to the port ${port}`);
})