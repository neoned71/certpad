
import uploads from "./_imageUpload.json";
const User = require('../../../src/node_models/users');



export async function post(req,res){
    let fun=uploads.single("signature");
    console.log("yes1");
    await fun(req,res,console.log);
    imageDbEntry(req,res);
    
    
}


async function imageDbEntry(req,res){
    console.log("yes2");
    var ret = {status:"failed",message:"cannot upload image",route:req.route};
    await User.updateOne({_id:req.user._id},{$set:{signature:req.route}});
    res.status(200).end(JSON.stringify(ret));
    // return true;

}