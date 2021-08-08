
// import uploads from "./_imageUpload.json";
const User = require('../../../src/node_models/users');

export async function post(req,res){
    console.log(req.body);
    update(req.body,req,res);
}


async function update(obj,req,res){
    var ret = {status:"failed",message:"cannot update info"};
    console.log(obj);
    var t = await User.updateOne({_id:req.user._id},{$set:obj});
    console.log(t);
    if(t.ok==1)
    {
        ret.status="success";
        ret.message= "updated the information";
        res.status(200).end(JSON.stringify(ret));
    }
    else
    {
        res.status(400).end(JSON.stringify(ret));
    }
    
}