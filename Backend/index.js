const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/usermodel");
const connection = require("./config/db");
const tagsRouter = require("./routes/tags.route");
const clientRouter = require("./routes/client.route");
const { connect } = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();
const passport = require("./config/googleouth");
const ProjectRouter = require("./routes/project.route");
const TimerRouter = require("./routes/timer");

//google auth
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),

  function (req, res) {
    console.log(req.user);
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

//signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  await bcrypt.hash(password, 8, function (err, hash) {
    if (err) {
      return res.send("signup failed ,please try again later");
    }

    const user = new UserModel({ email, password: hash });
    user.save();
    return res.send("signup successfully");
  });
});

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.send("invalid credential");
  }
  const hashed_password = user.password;
  await bcrypt.compare(password, hashed_password, function (err, result) {
    if (err) {
      return res.send("please try again later");
    }
    if (result == true) {
      const token = jwt.sign(
        { email: user.email, _id: user.id },
        process.env.jwt_secret_key
      );
      return res.send({
        massage: "login successfull",
        token: token,
        userId: user._id,
      });
    } else {
      return res.send("invalid credential");
    }
  });
});
//authentication middleware
const authenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("please login again1");
  }
  const user_token = req.headers.authorization.split(" ")[1];
  jwt.verify(user_token, process.env.jwt_secret_key, function (err, decoded) {
    if (err) {
      return res.send("please login again");
    }
    console.log(decoded);
    next();
  });
};
////////////////////////////////////////
app.use(authenticated);
app.use("/timer",TimerRouter)
app.use("/project", ProjectRouter);
app.use("/tags", tagsRouter);
app.use("/client", clientRouter);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB ");
  } catch (err) {
    console.log("failed to connect db");
    console.log(err);
  }
  console.log(`server runing at ${process.env.PORT}`);
});
