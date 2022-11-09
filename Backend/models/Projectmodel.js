
const mongoose=require("mongoose")

const projectSchema= new mongoose.Schema({
  email:{type:String,required:true},
  name:{type:String,required:true},
  client:{type:String,required:true},
  status:String
})
const ProjectModel= mongoose.model("projects",projectSchema)

module.exports={
  ProjectModel
}