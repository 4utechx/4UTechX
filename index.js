const express = require("express");
const app= express();
app.use(express.json());
let port= 3000;

require("./servers/db/db");
const empCollection = require("./servers/models/model");

app.use(express.urlencoded({extended : false}));

app.post("/feedback", async (req, res)=>{
         const Feedback = new empCollection({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            company : req.body.company,
            title : req.body.title,
            email : req.body.email,
            phone : req.body.phone,
         });

         const postData = await Feedback.save();
         if(postData){
         res.send(postData);
         }else{
          res.send("Error in saving data to database");
         }
      }
    )
  
app.get("/", (req, res)=>{
    res.send("Hello from 4UTechX");
}); 

app.listen(port, ()=>{
    console.log(`listing to the port ${port}`);
})