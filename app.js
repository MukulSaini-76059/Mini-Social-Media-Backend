const express = require('express');
const app = express();
const userModel = require("./model/user");
require("dotenv").config();
const mongoose = require("mongoose")
const dns = require("dns");
const connectDB = require('./db/db');
const path = require("path")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const postModel = require("./model/post")
const upload = require("./config/multerconfig")

dns.setServers(['8.8.8.8','8.8.4.4'])
connectDB()

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.get("/",function(req,res){
  res.render("index")
})

app.post("/register", async function(req,res){
  let {username,email,name,age,password} = req.body;

  let user = await userModel.findOne({email})
  if(user) return res.status(409).send("User Already Registered")

  bcrypt.genSalt(10,function(err,salt){
  bcrypt.hash(password,salt,async function(err,hash){
    let user = await userModel.create({
      username,
      email,
      name,
      age,
      password: hash
    })

    let token = jwt.sign({email:email, userid:user._id},process.env.SECRET)
    res.cookie("token",token)
    let post = await postModel.create({
    content:"Hello",
    user:user._id
    })
     res.redirect("/profile")
    })  
  })
})


app.get("/login", function (req,res){
  res.render("login")
})

app.post("/login", async function(req,res){
  let {email,password} = req.body;

  let user = await userModel.findOne({email})
  if(!user) return res.status(400).send("Something went wrong.")
  
  bcrypt.compare(password,user.password,function(err,result){
    if(result) {
      let token = jwt.sign({email:email, userid:user._id},process.env.SECRET)
      res.cookie("token",token)
      res.redirect("/profile")}
    else{
     res.redirect("/login")
    }
  })  
  
})

app.get("/logout", function(req,res){
  res.cookie("token","")
  res.redirect("/login")
})

app.get("/profile/upload", function (req, res){
  res.render("profileupload")
})

app.post("/upload", isLoggedIn,upload.single("images"), async function(req,res){
  let user = await userModel.findOne({email:req.user.email});
  if (!user) {
  return res.status(404).send("User not found"); 
}

  user.profilePic = req.file.filename;
  await user.save()
  res.redirect("/profile")
})

app.get("/profile", isLoggedIn,async function(req,res){
  let user = await userModel.findOne({email: req.user.email}).populate("posts")
  res.render("profile", {user})
})

app.get("/like/:id", isLoggedIn,async function(req,res){
  let post = await postModel.findOne({_id: req.params.id}).populate("user")
  
  if(post.likes.indexOf(req.user.userid) === -1){
    post.likes.push(req.user.userid)
  }else{
    post.likes.splice(post.likes.indexOf(req.user.userid), 1)
  }
  
  await post.save();
  res.redirect("/profile")
})

app.post("/update/:id", isLoggedIn, async function(req,res){
  await postModel.findOneAndUpdate(
    {_id: req.params.id},
    {content: req.body.content}
  );

  res.redirect("/profile")
})

app.get("/edit/:id", isLoggedIn, async function(req,res){

  let post = await postModel.findOne({_id: req.params.id}).populate("user")

  res.render("edit",{post})
})

app.post("/post", isLoggedIn,async function(req,res){
  
  let user = await userModel.findOne({email: req.user.email})
  let{content} = req.body;

  let post = await postModel.create({
    user:user._id,
    content
  })
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile")
})

function isLoggedIn (req,res,next){
  if(req.cookies.token == "") {
    res.redirect("/login")
  } else{
  let data = jwt.verify(req.cookies.token,process.env.SECRET)
  req.user = data
  }
  next();
}

app.listen(4000, function(){
  console.log("http://localhost:4000")
})