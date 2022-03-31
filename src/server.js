const app=require("./index")

const connect=require("./configs/db")




app.listen(3421, async()=>{
try{
    await connect();
    console.log("listening to port 3421");
}
catch(err){
    console.log(err);
}
});