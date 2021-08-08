const passport = require("passport");
import  Certificates  from '../../../src/node_models/certificates';

export async function post(req,res){
    var ret = {status:"failed",message:"cannot create a certificate"};
    console.log("creating certificate");
    console.log(req.body);
	try{
        var temp= new Certificates({name:req.body.name,template:req.body.template_id,issuer:req.user._id});
        await temp.save();
        ret.status="success";
        ret.message="successfully created the certificate:"+temp._id;
        res.status(200).end(JSON.stringify(ret));
    }
    catch(e){
        console.log(e);
        res.status(400).end(JSON.stringify(ret));
    }
}
