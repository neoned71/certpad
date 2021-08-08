const passport = require("passport");
import  Certificates  from '../../node_models/certificates';

export async function get(req,res){
    var ret ={status:"failed",message:"listing not found",}
    // console.log(req.user._id);
    const certificates = await Certificates.listing(req.user._id);
    if(certificates)
    {
        ret.data=certificates;
        ret.status="success";
        ret.message="Listing found";
        res.end(JSON.stringify(ret));
    }
}