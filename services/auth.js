

/* the server base authentication 
1> it save the data in the server this 
2> there user name and password is save in the database 
*/


/*

const sessionIdToUserMap=new Map();

function setUser(sessionId,user) {
    sessionIdToUserMap.set(sessionId,user);
    
}
function getUser(id) {
   return sessionIdToUserMap.get(id);
    
}
module.exports={
    setUser,
    getUser,
};



*/
// the stateless authenticaion  means the data is encrypted in  the token and token is
// is given to the user

const jwd=require("jsonwebtoken");
const sercretkey="nicky@9090";
function setUser(user) {
    return jwd.sign({
        _id:user._id,
        email:user.email,
    },sercretkey)
    
}
function getUser(token) {
    if(!token) return null;
   return jwd.verify(token,sercretkey);
}
module.exports={
    setUser,
    getUser,
};
