const express=require("express")
const ClientModel=require( "../models/ClientModel")
const clientRouter=express.Router();

//get
clientRouter.get("/",async(req,res)=>{
  
    try{
    var client= await ClientModel.find()
    }catch(err){
        console.log(err)
    }
    res.send(client)
})

//search
clientRouter.get("/",async(req,res)=>{
    
let {client}=req.query;
console.log(client)
    let user= await ClientModel.find({clientname: new RegExp(client, 'i')})
    res.send({user:user})

})


//post

clientRouter.post("/create/",async(req,res)=>{
    
const {clientname,userId}=req.body;
const new_Client =new ClientModel({
   clientname,
    userId:userId
})
await new_Client.save()
res.send({massage:"client successfully create",new_Client})
})

//patch
clientRouter.patch("/edit/:clientId",async(req,res)=>{
   
    const clientId=req.params.clientId;
    const Client= await ClientModel.findOne({_id:clientId})
  
    const new_Client= await ClientModel.findByIdAndUpdate(clientId,req.body)
    return res.send("updated")
})

//delete
// clientRouter.delete("/:userId/delete/:clientId",async(req,res)=>{
//     const userId=req.params.userId;
//     const clientId=req.params.clientId;

//     // console.log("client",clientId)
//     const Client= await ClientModel.findOne({_id:clientId})
//     if(Client.userId!==userId)
//     {
//         return res.send("you are not authorized to do it")
//     } 
//     const new_Client= await ClientModel.findByIdAndDelete(clientId)
//     return res.send("deleted")
// })
clientRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    
    const data = await ClientModel.findOne({ id: id });
  
    const del = await ClientModel.findOneAndDelete({ id: id });
    res.send({ message: "delted", data: del });
  
  });
module.exports=clientRouter;