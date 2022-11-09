const express = require("express");
const ProjectRouter = express.Router();
const { ProjectModel } = require("../models/Projectmodel");

//get function
ProjectRouter.get("/", async (req, res) => {
  const {email} = req.body;
  const data = await ProjectModel.find({email});
  res.send({"data":data});

});

//search//
ProjectRouter.get("/search",async(req,res)=>{
  let {name}=req.query;
  let user= await ProjectModel.find({name: new RegExp(name, 'i')})
  res.send({user:user})
  })


//post method
ProjectRouter.post("/create", async (req, res) => {
  const { email, name, client,status} = req.body;
  //console.log(req.body)
  const data = new ProjectModel({ email, name, client ,status});
  await data.save();
  res.send({"message":"Project added successfully."});
});


//patch method
ProjectRouter.patch("/edit/:id", async (req, res) => {
  const {id} = req.params
  // console.log("id", id);
  const {email} = req.body;
  await ProjectModel.updateOne({ _id: id,email },{...req.body});
  res.send({ message: "Project updated successfully"});
  
});
//delete method
ProjectRouter.delete("/delete/:id", async (req, res) => {
  const {id} = req.params;
  const {email}=req.body
  await ProjectModel.deleteOne({ _id: id,email });
  res.send({ message: "Project Deleted successfully"});

});

module.exports = {
  ProjectRouter
};
