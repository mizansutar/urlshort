const express = require("express");
const {handlerUserSignUp,handlerUserlogin}=require("../contoller/user");
const router=express.Router();




router.post('/',handlerUserSignUp);

router.post('/login',handlerUserlogin);
module.exports=router;