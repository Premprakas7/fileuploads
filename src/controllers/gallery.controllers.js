const express=require("express");
const uploads = require("../middleware/uploads");

const Gallery=require("../models/user.models");

const router=express.Router();

router.get("", async(req,res)=>{
try{
    const gallery=await Gallery.find().lean().exec();
    return res.status(200).send(gallery);

}catch(err){
    return res.status(500).send(err);
}
});


router.post("/multiple", uploads.any("profilePic"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
  
      const gallery = await Gallery.create({
        firstName: req.body.firstName,
        profilepic: filePaths,
      });
  
      return res.status(200).send(gallery);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });




module.exports=router;