const passport = require("passport");
import  Templates  from '../../../src/node_models/templates';

export async function get(req,res){
    var ret ={status:"failed",message:"listing not found",}
    const templates = await Templates.listing(req.user._id);
    if(templates)
    {
        ret.data=templates;
        ret.status="success";
        ret.message="Listing found";
        res.end(JSON.stringify(ret));
    }
}