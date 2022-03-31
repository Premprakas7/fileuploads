const path=require("path");
const multer  = require("multer");
const req = require("express/lib/request");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() ;
      cb(null, uniquePrefix + '-' + file.originalname)
    }
  });

  const fileFilter =(req, file, cb)=> {
    console.log({file})
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
      cb(null, true);
    }
    else{
      cb(new Error('I don\'t have a clue!'),false);
    }
  }

const options = {
    storage:storage,
    fileFilter:fileFilter,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
  };



const uploads=multer(options);



module.exports=uploads;