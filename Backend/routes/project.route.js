const mongoose = require("mongoose");
const express = require("express");
const ProjectRouter = express.Router();
const ProjectModel = require("../models/Projectmodel");


//search


ProjectRouter.get("/",async(req,res)=>{
  let {client}=req.query;
  console.log(client)
      let user= await ProjectModel.find({clientname: new RegExp(client, 'i')})
      res.send({user:user})
  
  })
//get function
ProjectRouter.get("/", async (req, res) => {
  // const user = req.params.userId;
  // const data = await ProjectModel.find({ user: user });
  const data = await ProjectModel.find();
  res.send(data);
});

//post method
ProjectRouter.post("/create/:userId", async (req, res) => {
  const { id, name, client } = req.body;
  const user = req.params.userId;
  const data = new ProjectModel({ id, name, client, user });
  await data.save();
  res.send(data);
});


//patch method
ProjectRouter.patch("/edit/:id", async (req, res) => {
  const id = +req.params.id;
  console.log("id", id);
  const user = req.user.id;
  console.log(mongoose.Types.ObjectId(user));
  const note = await ProjectModel.findOne({ id: id });
  console.log(note);
  // if(note.user === mongoose.Types.ObjectId(user)){
  const new_project = await ProjectModel.findOneAndUpdate(
    { id: id },
    req.body,
    { new: true }
  );
  return res.send({ message: "successfully updated", note: new_project });
  
});
//delete method
ProjectRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  
  const data = await ProjectModel.findOne({ id: id });

  const del = await ProjectModel.findOneAndDelete({ id: id });
  res.send({ message: "delted", data: del });

});
module.exports = ProjectRouter;
