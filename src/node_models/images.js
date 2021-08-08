const mongoose = require("mongoose");
// const notifications = require("./notifications.js");
const ObjectId=mongoose.Schema.ObjectId;
// const messages = require("./messages.js");
const Mixed=mongoose.Schema.Types.Mixed;
const ImageSch = new mongoose.Schema(
    {
       url:{type:String,required:true},
       caption:String,
       tags:{type:[String]},
       description:String,
       timestamp:{
        type:Date,
        default:Date.now
       }
    },
    { strict: false }
);

// module.exports = Images = mongoose.model("images", ImageSch);
module.exports = ImageSch;