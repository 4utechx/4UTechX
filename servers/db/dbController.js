const empCollection = require("../models/model");
const postFeedbackData = async (req, res)=>{
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

 const getFeedbackData = async (req, res) => {
    try {
      const feedback = await empCollection
        .find({})
       res.send({
        success: true,
        countTotal: feedback.length,
        message: "All feedback",
        feedback,
      });
  
    } 
    catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Could not get vehicles",
      }
      );
    }
  }

  module.exports = {
    postFeedbackData,
    getFeedbackData
  }