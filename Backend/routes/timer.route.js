const express=require("express")
const TimerRouter= express.Router()
const {TimerModel}=require("../models/timer.model")

TimerRouter.get("/",async(req,res)=>{
    const {email}=req.body
    const data=await TimerModel.find({email})
    res.send({"data":data})
})

TimerRouter.post("/create",async(req,res)=>{
const{email,project,stopat,client,status}=req.body
const new_data=new TimerModel({email,project,stopat,client,status})
await new_data.save()
res.send({"message":"New Data created Successfully"})
})


TimerRouter.delete("/delete/:id",async(req,res)=>{
    const {id}= req.params
    await TimerModel.deleteOne({_id:id,email:req.body.email})
    res.send({"message":"Data Deleted Successfully"})
})

TimerRouter.patch("/patch/:id",async(req,res)=>{
    const {id}= req.params
    const {project,stopat}=req.body
    await TimerModel.updateOne({_id:id,email:req.body.email},{project:project,stopat:stopat})
    res.send({"message":"Data Edited Successfully"})
})

module.exports={
    TimerRouter
}