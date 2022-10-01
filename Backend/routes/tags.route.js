const express=require("express")
const TagModel=require( "../models/tagmodel")
const tagsRouter=express.Router();

//search
tagsRouter.get("/search",async(req,res)=>{
    let {tag}=req.query;
    console.log(tag)
        let user= await TagModel.find({tagname: new RegExp(tag, 'i')})
        res.send({user:user})
    
    })
//get
tagsRouter.get("/:userId",async(req,res)=>{
    const user=req.params.userId
    try{
    var tags= await TagModel.find({user})
    }catch(err){
        console.log(err)
    }
    res.send(tags)
})

//post

tagsRouter.post("/create/:userId",async(req,res)=>{
    const userId =req.params.userId
const {tagname}=req.body;
const new_tag =new TagModel({
   tagname,
    userId
})
await new_tag.save()
res.send({massage:"tags successfully create",new_tag})
})

//patch
tagsRouter.patch("/:userId/edit/:tagsId",async(req,res)=>{
    const userId=req.params.userId;
    const tagsId=req.params.tagsId;
    const tag= await TagModel.findOne({_id:tagsId})
    if(tag.userId!==userId)
    {
        return res.send("you are not authorized to do it")
    }
    const new_tag= await TagModel.findByIdAndUpdate(tagsId,req.body)
    return res.send("updated")
})

//delete
tagsRouter.delete("/:userId/delete/:tagsId",async(req,res)=>{
    const userId=req.params.userId;
    const tagsId=req.params.tagsId;
    const tag= await TagModel.findOne({_id:tagsId})
 
    const new_tag= await TagModel.findByIdAndDelete(tagsId)
    return res.send("deleted")
})
module.exports=tagsRouter;