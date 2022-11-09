const mongoose=require("mongoose");
const ClientSchema= new mongoose.Schema({
    clientname:{type:String,required:true},
    email:{type:String,required:true}
})
const ClientModel= mongoose.model("Clients",ClientSchema)
module.exports={
    ClientModel
};