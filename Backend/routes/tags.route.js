const express=require("express")
const {TagModel}=require( "../models/tagmodel")
const tagsRouter=express.Router();

//get 
tagsRouter.get("/",async(req,res)=>{
    const {email}=req.body
    const data=await TagModel.find({email})
    res.send({"data":data})
})

//search
tagsRouter.get("/search",async(req,res)=>{
    let {tag}=req.query;
    //console.log(tag)
    let user= await TagModel.find({tagname: new RegExp(tag, 'i')})
    res.send({user:user})
})

//post

tagsRouter.post("/create",async(req,res)=>{
    const {email,tagname} =req.body
    const new_tag =new TagModel({tagname,email})
    await new_tag.save()
    res.send({massage:"Tag created successfully",new_tag})
})

//patch
tagsRouter.patch("/edit/:tagsId",async(req,res)=>{
    const {email,tagname}=req.body;
    const {tagsId}=req.params;
    await TagModel.updateOne({_id:tagsId,email},{tagname:tagname})
    res.send({"message":"Tag updated successfully"})
})

//delete
tagsRouter.delete("/delete/:tagsId",async(req,res)=>{
    const {email}=req.body;
    const {tagsId}=req.params;
    const tag= await TagModel.deleteOne({_id:tagsId,email})
    return res.send({"message":"Tag deleted Successfully",tag})
})

module.exports={
    tagsRouter
};