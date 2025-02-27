
const {nanoid}=require("nanoid");
const URL=require("../models/url.js");

async function handlerGeraateNewShortURL(req,res) {
    
    
   const body=req.body;
   if(!body.url)return res.status(400).json({error:'url is required'});
   const shortID=nanoid(5);
    console.log(shortID);
    await URL.create({
        shortId:shortID,
        reddirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id,
        
    });
    //console.log(req.user);
    console.log("data saving...!");
    return res.render("home",{
        id:shortID,
    });
    //return res.json({id:shortID});
}

async function handlerGetAlaytics(req,res) {
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory
    });
}
module.exports={
    handlerGeraateNewShortURL,
    handlerGetAlaytics,
};