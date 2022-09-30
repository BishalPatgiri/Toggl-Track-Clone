const express=require("express")
const ClientModel=require( "../models/ClientModel")
const clientRouter=express.Router();

//get
clientRouter.get("/:userId",async(req,res)=>{
    const user=req.params.userId
    try{
    var client= await ClientModel.find({user})
    }catch(err){
        console.log(err)
    }
    res.send(client)
})

//post

clientRouter.post("/create/:userId",async(req,res)=>{
    const userId =req.params.userId
const {Clientname}=req.body;
const new_Client =new ClientModel({
   Clientname,
    userId
})
await new_Client.save()
res.send({massage:"client successfully create",new_Client})
})

//patch
clientRouter.patch("/:userId/edit/:clientId",async(req,res)=>{
    const userId=req.params.userId;
    const clientId=req.params.clientId;
    const Client= await ClientModel.findOne({_id:clientId})
    if(Client.userId!==userId)
    {
        return res.send("you are not authorized to do it")
    }
    const new_Client= await ClientModel.findByIdAndUpdate(clientId,req.body)
    return res.send("updated")
})

//delete
clientRouter.delete("/:userId/delete/:clientId",async(req,res)=>{
    const userId=req.params.userId;
    const clientId=req.params.clientId;
    const Client= await ClientModel.findOne({_id:clientId})
    if(Client.userId!==userId)
    {
        return res.send("you are not authorized to do it")
    } 
    const new_Client= await ClientModel.findByIdAndDelete(clientId)
    return res.send("deleted")
})
module.exports=clientRouter;