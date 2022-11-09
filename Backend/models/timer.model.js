const mongoose=require("mongoose")

const timerSchema= new mongoose.Schema({
    email:{type:String,required:true},
    project:{type:String,required:true},
    client:String,
    status:String,
    stopat:{type:String,required:true},
})

const TimerModel= mongoose.model("timer",timerSchema)

module.exports={
  TimerModel
}