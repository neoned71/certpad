const mongoose = require("mongoose");
const Products = require("./products");
const Coupons = require("./coupons");

const CartSch = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.ObjectId,
            required:true,
            unique:true,
            sparse:false
        
        },
        items: {
            type: []
        },
        coupon_code: {
            type: String  
        }
    },
    { strict: false }
);

Carts = mongoose.model("carts", CartSch);

Carts.getCart=async function(user_id)
{
    var c=await Carts.find({user_id:user_id});
    return c;
}

//item should be like: {product_id,quantity}
Carts.insertItemIntoCart=async function(user_id,item)
{
    
    if(!mongoose.Types.ObjectId.isValid(user_id))
    {
        // console.log("rej");
        return false;
    }

    var cart=await Carts.findOne({user_id:user_id});
    // console.log(cart);
    var found=false;
    for(var i =0;i< cart.items.length;i++){
        if(cart.items[i].product_id == item.product_id)
        {
            found=true;
            if(item.quantity>0)
            {
                cart.items[i].quantity += item.quantity;
            }
            break;
        }
    }
    if(!found)
    {
        cart.items.push(item);
    }
    cart.markModified('items');
    // console.log(cart);
    var t = await cart.save();
    // console.log(t);
    // var t=await Carts.updateOne({user_id:user_id},{$push:{items:item}});
    if(t)
    {
        console.log(t);
        return true;
    }
    else{
        
        return false;
    }
    
}


Carts.modifyCartItemQuantity=async function(user_id,product_id,quantity)
{
    if(!mongoose.Types.ObjectId.isValid(user_id))
    {
        return false;
    }
    var found=false;
    var cart=await Carts.findOne({user_id:user_id});
    // console.log(t.items);
    for(var i =0;i< cart.items.length;i++){
        if(cart.items[i].product_id == product_id)
        {
            found=true;
            if(quantity>0)
            {
                cart.items[i].quantity= quantity;
                
            }
            else{
                cart.items.splice(i,1);
            }
            
            break;

        }
    }
    if(!found)
    {
        cart.items.push(item);
    }
    cart.markModified('items');
    var res= await cart.save();

    if(res)
    {
        return true;
    }
    else{
        return false;
    }
}

Carts.removeElementFromCart=async function(user_id,product_id)
{
    if(!mongoose.Types.ObjectId.isValid(user_id))
    {
        console.log("wer");
        return false;
    }
    var found=false;
    var cart=await Carts.findOne({user_id:user_id});
    // console.log(t.items);
    for(var i =0;i< cart.items.length;i++){
        if(cart.items[i].product_id == product_id)
        {
            // console.log("wer");
            found=true;
            cart.items.splice(i,1);
            break;

        }
    }
    if(!found)
    {
        // console.log("sd");
        return false;
    }
    cart.markModified('items');
    var res= await cart.save();
    console.log(res);
    if(res)
    {
        return true;
    }
    else{
        return false;
    }
}

Carts.clearCart=async function(user_id)
{
    if(!mongoose.Types.ObjectId.isValid(user_id))
    {
        return false;
    }
    var cart=await Carts.findOne({user_id:user_id});
    // console.log(t.items);
    cart.items.splice(i,cart.items.length);
    cart.markModified('items');
    var res= await cart.save();

    if(res)
    {
        return true;
    }
    else{
        return false;
    }
}


Carts.getTotalAmount=async function(user_id)
{
    var t={list:[],status:"success",total:0,discount:0};
    var failed=false;
    if(!mongoose.Types.ObjectId.isValid(user_id))
    {
        console.log("wer");
        return false;
    }
    // var found=false;
    var cart=await Carts.getCart({user_id:user_id});
    var total=0;
    var tmp;
    // console.log(t.items);
    for(var i =0;i< cart.items.length;i++){
       tmp = await Products.getProduct(cart.items[i].product_id);
       if(tmp.inventory > cart.item[i].quantity)
       {
        total += tmp.price * cart.item[i].quantity;
       }
       else{
           t.list.push(cart.items[i].product_id);
           failed=true;
        //    return {message:"there are some"};
       }
    }

    
    t.total = total;
    if(cart.coupon_code)
    {
        var coupon = await Coupons.getCoupon(cart.coupon_code);
        if(coupon)
        {
            t.discount = coupon.discount;
        }
    }
    
    if(failed)
    {
        t.status="failed";
        
    }
    
    return t;
}


module.exports = Carts;
