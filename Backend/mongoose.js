const mongoose=require("mongoose")
require("dotenv").config();

const connection=mongoose.connect(process.env.MONGO_URL)

const userSchema= new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
  })
  const UserModel= mongoose.model("user",userSchema)

  const bmiSchema= new mongoose.Schema({
    email: String,
    bmi: Number
  })
  const bmiModel= mongoose.model("BMI",bmiSchema)

  module.exports={
    connection,
    UserModel,
    bmiModel
}