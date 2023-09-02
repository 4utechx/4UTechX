const express = require("express");
const app= express();

const router=express.Router();
app.use(router);
app.use(express.json());

let port= 3000 ||process.env.port;

require("./servers/db/db"); //To Connect with mongodb

const {postFeedbackData, getFeedbackData} = require("./servers/db/dbController"); //Calling controller functions

app.use(express.urlencoded({extended : false}));

router.post("/feedback", postFeedbackData);

router.get("/feedbacks", getFeedbackData)
  
app.get("/", (req, res)=>{
    res.send("Hello from 4UTechX");
}); 

app.listen(port, ()=>{
    console.log(`listing to the port ${port}`);
})

