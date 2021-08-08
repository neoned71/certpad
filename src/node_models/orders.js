const mongoose = require("mongoose");
const { use } = require("../routes/shopping");
const Carts = require("./cart");
const Cart = require("./cart");
// const notifications = require("./notifications.js");

const ObjectId=mongoose.Schema.ObjectId;
// const messages = require("./messages.js");
const Mixed=mongoose.Schema.Types.Mixed;
const OrderSch = new mongoose.Schema(
    {
        amount:{type:Number,set:(v)=>{return v;}},//total after applying coupon then tax!
        user_id:{type:ObjectId,required:true},
        items:{type:[],required:true},
        status:{type:String,default:"placed"},
        cancel:{type:Mixed,default:{cancelled:false,reason:"",action:""}},//{cancelled:false}
        coupon:{type:ObjectId},
        transaction_id:{type:ObjectId,required:true},
        
        timestamp:{
        type:Date,
        default:Date.now
       }        
    },
    { strict: false,minimize:false }
);

Orders = mongoose.model("orders", OrderSch);

Orders.getUserOrders=async function(user_id)
{
    if(!mongoose.Types.ObjectId.isValid(order_id))
    {
        return false;
    }
    orders=await Orders.find({user_id:user_id}).sort({timestamp:-1});
    return orders;
}

Orders.getAllOrders=async function()
{
    if(!mongoose.Types.ObjectId.isValid(order_id))
    {
        return false;
    }
    orders=await Orders.find().sort({timestamp:-1});
    return orders;
}

Orders.getOrder=async function(order_id)
{
    if(!mongoose.Types.ObjectId.isValid(order_id))
    {
        return false;
    }
    orders=await Orders.find({_id:order_id});
    return orders;
}

Orders.createFromCart=async function(user_id)
{
    if(!mongoose.Types.ObjectId.isValid(user_id))
    {
        return false;
    }
    try{
        cart=await Cart.getCart(user_id);
        var t = new Orders()
        if(cart)
        {
            //cloning items
            t.items=cart.items;
            t.amount = await Cart.getTotalAmount(user_id);
            t.coupon= cart.coupon;
            await t.save();
            await Carts.clearCart(user_id);
            return true;
        }
        else{
            return false;
        }
    }
    catch(e){
        console.log(e);
        return false;
    }
    
    return orders;
}

//item should be like: {product_id,quantity}
Orders.cancelOrder=async function(order_id,cancel_obj)
{
    if(!mongoose.Types.ObjectId.isValid(order_id))
    {
        return false;
    }
    var t=await Orders.updateOne({_id:order_id},{$set:{cancel:cancel_obj}},function(err,res){console.log(res);console.log(err)});
    if(t.ok==1)
    {
        return true;
    }
    else{
        return false;
    }
    
}




Orders.whateverTemplate=async function(order_id)
{
    if(!mongoose.Types.ObjectId.isValid(order_id))
    {
        return false;
    }
    var order=await Orders.findOne({_id:order_id},function(err,res){console.log(res);console.log(err)});

    //do something

    var res= await order.save();

    if(res.ok==1)
    {
        return true;
    }
    else{
        return false;
    }
}


module.exports = Orders