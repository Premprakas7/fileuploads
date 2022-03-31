const mongoose=require("mongoose");

const gallerySchema=new mongoose.Schema({
    firstName:{type:String , required:true},
    profilepic:{type:String , required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    }
});

module.exports=mongoose.model("user", gallerySchema);