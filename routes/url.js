const express=require("express");
const{handlerGeraateNewShortURL}=require('../contoller/url');
const router=express.Router();
router.post('/',handlerGeraateNewShortURL);

//router.get("/analytics/:shortId",handlerGetAlaytics);
module.exports=router;