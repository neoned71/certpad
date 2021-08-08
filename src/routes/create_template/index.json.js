const passport = require("passport");
import  Templates  from '../../../src/node_models/templates';

export async function post(req,res){
    var ret = {status:"failed",message:"cannot create a template"};
    console.log("creating template");
    console.log(req.body);
	try{
        var temp= new Templates({name:req.body.name,description:req.body.description,owner_id:req.user._id,color:req.body.color});
        await temp.save();
        ret.status="success";
        ret.message="successfully created the template:"+temp._id;
        res.status(200).end(JSON.stringify(ret));
    }
    catch(e){
        console.log(e);
        res.status(400).end(JSON.stringify(ret));
    }
}


// export const post=function(req,res){
//     console.log(req.body);	

// }


// ,body:JSON.stringify({username,password}