const express = require("express");
const router=express.Router();
const URL=require("../models/url.js");
router.get('/',async(req,res)=>{
    //console.log("hello");
  const allurls =await URL.find({})
    return res.render("home",{
        urls:allurls,
    });
});

router.get('/signup',async(req,res)=>{
    //console.log("hello");
  //const allurls =await URL.find({})
    return res.render("signup");
});

router.get('/login',async(req,res)=>{
    //console.log("hello");
  //const allurls =await URL.find({})
    return res.render("login");
});

module.exports=router;
