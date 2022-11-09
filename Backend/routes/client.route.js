const express=require("express")
const {ClientModel}=require( "../models/clientmodel")
const clientRouter=express.Router();

//get
clientRouter.get("/",async(req,res)=>{
    const {email}=req.body
    const data= await ClientModel.find({email})
    //console.log(data)
    res.send({"data":data})
})

//search
clientRouter.get("/search",async(req,res)=>{
    const {email}=req.body
    const {client}=req.query;
    const user= await ClientModel.find({clientname: new RegExp(client, 'i'),email})
    res.send({"user":user})
})


//post

clientRouter.post("/create",async(req,res)=>{   
const new_client=new ClientModel(req.body)
await new_client.save()
res.send({"message":"Client added Successfully"})
})

//patch
clientRouter.patch("/edit/:clientId",async(req,res)=>{
    const {clientId}=req.params;
    const {email}=req.body
    await ClientModel.updateOne({_id:clientId,email},{...req.body})
    return res.send({"message":"Client updated successfully"})
})

//delete
clientRouter.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    const {email}=req.body
    await ClientModel.deleteOne({ _id: id,email });
    res.send({ "message": "Client deleted successfully" });
  
  });

module.exports={
    clientRouter
};