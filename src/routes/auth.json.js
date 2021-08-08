// const passport = require("passport");
// import  Templates  from '../../../src/node_models/templates';

export async function get(req,res){
    var s=req.logout();
    console.log(s);
    res.status(200).end(JSON.stringify({status:"success",message:"successfully logged out!"}));
}