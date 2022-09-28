const mongoose=require("mongoose");
const NoteSchema= new mongoose.Schema({
   
    title:String,
    note:String,
    label:String,
    userId:{type:String,required:true}
})
const NotesModel= mongoose.model("notes",NoteSchema)
module.exports=NotesModel;