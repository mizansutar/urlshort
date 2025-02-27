const {getUser}=require("../services/auth")

async function restrictToLoginUserOnly(req,res,next) {
    console.log(req.cookies?.uid);
    const userUid=req.cookies?.uid;

if(!userUid)return res.redirect("/login");
const user= getUser(userUid);

if(!user) return res.redirect("/login");


req.user=user;
//console.log("the userrr  :"+req.user);
next();

}
module.exports={
    restrictToLoginUserOnly,
};