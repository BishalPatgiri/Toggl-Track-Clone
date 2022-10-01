var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
const { v4: uuidv4 } = require('uuid');
const passport=require("passport");
const UserModel = require('../models/usermodel');
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://mighty-ocean-92965.herokuapp.com/auth/google/callback",
    passReqToCallback   : true
  },
  async function(accessToken, refreshToken, profile, cb) {
    let email=profile._json.email
    const user=new UserModel({
email,
password:uuidv4()
    })
    await user.save()
    const{_id,password}=user;
    const payload={
        email,
        _id,
        password,
        url:profile._json.picture
    }
    return cb(null,payload)

   
console.log(profile)
 }
));
module.exports=passport