const mongoose = require("mongoose");
const { modifyCartItemQuantity } = require("./cart");
// const notifications = require("./notifications.js");

const ObjectId=mongoose.Schema.ObjectId;

const Mixed=mongoose.Schema.Types.Mixed;
const ProductSch = new mongoose.Schema(
    {
        name:{type:String,required:true},
        description:String,
        price:{type:Number,required:true,min:1},
        inventory:{type:Number,default:10},
        type:String,// digital or physical
        images:[String],
        category:String,// lamp, course, wearable, mechanical, applications
        // details:[String],
        reviews:[Mixed],// Example: {rating:4,review:"very good",user_id:"Object ID"}
        extra:String,
        enabled:{type:Boolean,default:false}
	},
    { strict: false,minimize:false }
);
// module.exports = Products = mongoose.model("products", ProductSch);

Products = mongoose.model("products", ProductSch);

Products.getProduct=async function(product_id)
{
    p=await Products.findOne({_id:product_id});
    return p;
}

Products.listing=async function(condition=null)
{
    var t= await Products.find(condition);
    return t;
}

//review should be like: {rating,review,user_id}
Products.insertReview=async function(product_id,review)
{
    if(!mongoose.Types.ObjectId.isValid(product_id))
    {
        return false;
    }
    var t=await Products.updateOne({_id:product_id},{$push:{reviews:review}});
    if(t.ok==1 && t.nModified==1)
    {
        return true;
    }
    else{
        return false;
    }
}

Products.updateProductInfo=async function(product_id,modified_obj)
{
    // console.log(modified_obj);
    if(!mongoose.Types.ObjectId.isValid(product_id))
    {
        // console.log("rejected");
        return false;
    }
    var t=await Products.updateOne({_id:product_id},{$set:modified_obj});
    if(t.ok==1 && t.nModified==1)
    {
        return true;
    }
    else{
        console.log(t);
        return false;
    }   
}

Products.addImage=async function(product_id,image)
{
    if(!mongoose.Types.ObjectId.isValid(product_id))
    {
        return false;
    }
    console.log("image added");
    var t=await Products.updateOne({_id:product_id},{$push:{image_url:image}});
    if(t.ok==1 && t.nModified==1)
    {
        return true;
    }
    else{
        return false;
    }
    
}


Products.removeImage=async function(product_id,image_url)
{
    if(!mongoose.Types.ObjectId.isValid(product_id))
    {
        return false;
    }
    var t=await Products.updateOne({_id:product_id},{$pull:{image_url:image_url}});
    // console.log(t);
    if(t.ok==1 && t.nModified==1)
    {
        return true;
    }
    else{
        return false;
    }
    
}



Products.whateverTemplate=async function(product_id)
{
    if(!mongoose.Types.ObjectId.isValid(product_id))
    {
        return false;
    }
    var product=await Products.findOne({_id:product_id});

    //do something

    var res= await product.save();

    if(res.ok==1)
    {
        return true;
    }
    else{
        return false;
    }
}

module.exports = Products;