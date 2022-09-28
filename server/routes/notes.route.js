const express=require("express")
const NotesModel=require( "../models/notesmodel")
const notesRouter=express.Router();
notesRouter.get("/:userId",async(req,res)=>{
    const user=req.params.userId
    try{
    var notes= await NotesModel.find({user})
    }catch(err){
        console.log(err)
    }
    res.send(notes)
})

notesRouter.post("/create/:userId",async(req,res)=>{
    const userId =req.params.userId
const {title,note,label}=req.body;
const new_note =new NotesModel({
    title,
    note,
    label,
    userId
})
await new_note.save()
res.send({massage:"notes successfully create",new_note})
})

//patch
notesRouter.patch("/:userId/edit/:notesId",async(req,res)=>{
    const userId=req.params.userId;
    const notesId=req.params.notesId;
    const note= await NotesModel.findOne({_id:notesId})
    if(note.userId!==userId)
    {
        return res.send("you are not authorized to do it")
    }
    const new_note= await NotesModel.findByIdAndUpdate(notesId,req.body)
    return res.send("updated")
})
notesRouter.delete("/:userId/delete/:notesId",async(req,res)=>{
    const userId=req.params.userId;
    const notesId=req.params.notesId;
    const note= await NotesModel.findOne({_id:notesId})
    if(note.userId!==userId)
    {
        return res.send("you are not authorized to do it")
    } 
    const new_note= await NotesModel.findByIdAndDelete(notesId)
    return res.send("deleted")
})
module.exports=notesRouter;