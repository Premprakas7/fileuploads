const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{type:String , required:true},
    lastName:{type:String , required:false},
    profilepic:{type:String , required:true}
});

module.exports=mongoose.model("user", userSchema);