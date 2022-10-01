const mongoose=require("mongoose");
const TagSchema= new mongoose.Schema({
   
    tagname:{type:String,required:true},
    userId:{type:String,required:true}
})
const TagModel= mongoose.model("Tags",TagSchema)
module.exports=TagModel;