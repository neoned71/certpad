const mongoose = require("mongoose");
const CouponSch = new mongoose.Schema(
    {
        name: {
            type: String
        },
        discount:{type:Number,min:0,max:50},
        date_created: {
            type: Date,
            default: Date.now
        },
        applicable:{type:[],deafult:["all"]}
    },
    { strict: false }
);

Coupons = mongoose.model("coupons", CouponSch);



//functions
Coupons.getCoupon=async function(coupon_id)
{
    p=await Coupons.findOne({_id:coupon_id});
    return p;
}

Coupons.getAllCoupons=async function(condition=null)
{
    var t= await Coupons.find(condition);
    return t;
}

Coupons.removeCoupon=async function(coupon_id)
{
    var t= await Coupons.deleteOne({_id:coupon_id});
    return t;
}




module.exports = Coupons;
