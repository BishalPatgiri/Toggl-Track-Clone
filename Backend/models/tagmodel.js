const mongoose=require("mongoose");

const TagSchema= new mongoose.Schema({
    tagname:{type:String,required:true},
    email:{type:String,required:true}
})

const TagModel= mongoose.model("Tags",TagSchema)
module.exports={
    TagModel
};