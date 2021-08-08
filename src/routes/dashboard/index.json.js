const passport = require("passport");
import  Certificates  from '../../../src/node_models/certificates';

export function get(req,res){
    var ret ={status:"failed",message:"listing not found",}
    const certificates = Certificates.listing();
    if(certificates)
    {
        ret.data=certificates;
        ret.status="success";
        ret.message="Listing found";
        res.end(JSON.stringify(ret));
    }
	
}