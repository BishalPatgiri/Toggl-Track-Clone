const express = require("express");
const jwt = require("jsonwebtoken");
const cors=require("cors")
require("dotenv").config();

const {connection} = require("./config/db");

const app = express();


const {ProjectRouter} = require("./routes/project.route");
const { TimerRouter } = require("./routes/timer.route.js");
const { userRouter } = require("./routes/user.route");
const { clientRouter } = require("./routes/client.route");
const { tagsRouter } = require("./routes/tags.route");


//signup && signin

// authentication middleware


const authenticated = (req, res, next) => {
  if (!req.headers.authorization) {
     res.send({"message":"Please Signin First"});
  }
  else{
  const user_token = req.headers.authorization.split(" ")[1];
  //console.log(user_token)
  jwt.verify(user_token, process.env.jwt_secret_key, function (err, decoded) {
    if (err) {
      return res.send({"message":"Something went wrong. Please Signin again!!"});
    }
    else{
    req.body.email=decoded.email
    next();
    }
  })
};
};

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
  res.send("Welcome to Toggl Track backend")
})
app.use("/user",userRouter)
app.use("/timer",authenticated,TimerRouter)
app.use("/client",authenticated, clientRouter);
app.use("/project",authenticated, ProjectRouter);
app.use("/tags",authenticated, tagsRouter);

const PORT=process.env.PORT||8080
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully");
  } 
  catch (err) {
    console.log("Failed to connect to db");
    console.log(err);
  }
  console.log(`Server runing at ${PORT}`);
});
