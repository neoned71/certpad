const mongoose = require("mongoose");
// const notifications = require("./notifications.js");
const ObjectId=mongoose.Schema.ObjectId;

const Mixed=mongoose.Schema.Types.Mixed;
const TemplateSch = new mongoose.Schema(
    {
        name:{type:String,required:true},
        owner_id:{type:ObjectId,ref:'users',required:true},
        description:{type:String,required:true},
        color:{type:String,default:"red"},
        // color:
        logo:{type:String,default:"/favicon.png",required:true},

	},
    { strict: false,minimize:false,timestamps: { createdAt: 'timestamp', updatedAt: 'updated_at' } }
);
// module.exports = Templates = mongoose.model("templates", TemplateSch);

var Templates = mongoose.model("templates", TemplateSch);

Templates.getTemplate=async function(template_id,owner_id)
{
    p=await Templates.findOne({_id:template_id,owner_id:owner_id});
    return p;
}

Templates.listing=async function(owner_id)
{
    var t= await Templates.find({owner_id:owner_id}).sort({'timestamp':-1}).exec();
    return t;
}

module.exports = Templates;