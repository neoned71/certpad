const mongoose = require("mongoose");
// const notifications = require("./notifications.js");
// const comments = require("./comments.js");
const ObjectId=mongoose.Schema.ObjectId;
// const messages = require("./messages.js");
const Mixed=mongoose.Schema.Types.Mixed;
const TransactionsSch = new mongoose.Schema(
    {
       amount:{type:Number,set:(v)=>{return v;},required:true},
       user_id:{type:ObjectId,required:true},
       status:{type:String,required:true,default:"created"},
       data:Mixed,
       refund:{type:Mixed,default:{refund:false,info:{}}},
       timestamp:{
        type:Date,
        default:Date.now
       }
    },
    { strict: false,minimize:false }
);

Transactions = mongoose.model("transactions", TransactionsSch);
// Products = mongoose.model("products", ProductSch);


//Admin
Transactions.getTransaction=async function(transaction_id)
{
    p=await Transactions.findOne({_id:transaction_id});
    return p;
}


//Admin
Transactions.getAllTransactions=async function()
{
    
    transactions=await Transactions.find().sort({timestamp:-1});
    return transactions;
}



Transactions.updateStatus=async function(transaction_id,status)
{
    if(!mongoose.Types.ObjectId.isValid(transaction_id))
    {
        return false;
    }
    var t=await Transactions.updateOne({_id:transaction_id},{$set:{status:status}},function(err,res){console.log(res);console.log(err)});
    if(t.ok==1)
    {
        return true;
    }
    else{
        return false;
    }   
}

Transactions.whateverTemplate=async function(product_id)
{
    if(!mongoose.Types.ObjectId.isValid(product_id))
    {
        return false;
    }
    var product=await Transactions.findOne({_id:product_id},function(err,res){console.log(res);console.log(err)});

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

module.exports = Transactions;