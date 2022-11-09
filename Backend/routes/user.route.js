const express=require("express")
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../models/usermodel");
const userRouter=express.Router();

userRouter.post("/signup", async (req, res) => {
    const { username,email, password } = req.body;
    bcrypt.hash(password,6,async(err,encrypted)=>{
        if(err){
            res.send({"message":"Something went wrong! Please try again"})
        }
        else{
            const new_user=new UserModel({username,email,password:encrypted})
            await new_user.save()
            res.send({"message":"Signed Up Succcessful"})
        }
  })
});
  
userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
       res.send({"message":"You don't have an account with us. Please create one!!"});
    }
    else{
    const hash= user.password;
    bcrypt.compare(password, hash, (err, result)=> {
      if (err) {
         res.send({"message":"Please try again later"});
      }
      if(result){
        const token = jwt.sign({ email: user.email},process.env.jwt_secret_key);
        // localStorage.setItem("userToken",token)
        res.send({"message": "Signin Successfull","token":token}) 
      }
      else{
        res.send({"message":"Invalid Credential"});
      }
    })
    };
  });

module.exports={userRouter}