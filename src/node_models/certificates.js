const mongoose = require("mongoose");
// const notifications = require("./notifications.js");

const ObjectId=mongoose.Schema.ObjectId;

const Mixed=mongoose.Schema.Types.Mixed;
const CertificateSch = new mongoose.Schema(
    {
        name:{type:String,required:true},
        issuer:{type:ObjectId,ref:'users',required:true},
        template:{type:ObjectId, ref:'templates'},
        details:String,
        enabled:{type:Boolean,default:true}

	},
    { strict: false,minimize:false,timestamps: { createdAt: 'timestamp', updatedAt: 'updated_at' } }
);
// module.exports = Certificates = mongoose.model("certificates", CertificateSch);

var Certificates = mongoose.model("certificates", CertificateSch);

Certificates.getCertificate=async function(certificate_id)
{
   let p=await Certificates.findOne({_id:certificate_id}).populate("template").populate("issuer",{password:0,password_hash:0}/*,{organization:1}*/).exec();
//    p.issuer = {logo:p.issuer.logo,signature:p.issuer.signature,name:p.issuer.name};
//    console.log(p);
    return p;
}


//must supply issuer id
Certificates.listing=async function(issuer_id)
{
    
    var t= await Certificates.find({issuer:issuer_id}).populate("template").sort({'timestamp':-1}).exec();
    return t;
}


Certificates.updateCertificateInfo=async function(certificate_id,modified_obj)
{
    // console.log(modified_obj);
    if(!mongoose.Types.ObjectId.isValid(certificate_id))
    {
        // console.log("rejected");
        return false;
    }
    var t=await Certificates.updateOne({_id:certificate_id},{$set:modified_obj});
    if(t.ok==1 && t.nModified==1)
    {
        return true;
    }
    else{
        console.log(t);
        return false;
    }   
}




Certificates.whateverTemplate=async function(certificate_id)
{
    if(!mongoose.Types.ObjectId.isValid(certificate_id))
    {
        return false;
    }
    var certificate=await Certificates.findOne({_id:certificate_id});

    //do something

    var res= await certificate.save();

    if(res.ok==1)
    {
        return true;
    }
    else{
        return false;
    }
}

module.exports = Certificates;