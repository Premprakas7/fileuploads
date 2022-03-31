const express=require("express");
const uploads = require("../middleware/uploads");

const User=require("../models/user.models");

const router=express.Router();

router.get("", async(req,res)=>{
try{
    const user=await User.find().lean().exec();
    return res.status(200).send(user);

}catch(err){
    return res.status(500).send(err);
}
});

router.post("", uploads.single("profilepic"), async (req, res) => {
    try {
     
      const user = await User.create({
        firstName: req.body.firstName,
        profilepic: req.file.path,
      });
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  router.post("/multiple", uploads.any("profilePic"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
  
      const user = await User.create({
        firstName: req.body.firstName,
        profilepic: filePaths,
      });
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });




module.exports=router;