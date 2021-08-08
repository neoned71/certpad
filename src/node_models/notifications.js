const mongoose = require("mongoose");

const NotificationsSchema = new mongoose.Schema(
  {
    post_id: {
      type: String,
      required:true
    },
    owner_id: {//the one who recieves this notification
      type: String,
      required:true
    },
    text: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);

Notifications = mongoose.model("notifications", NotificationsSchema);

//functions to add notifications
Notifications.get= async function(user_id){
  var n=[];
    n=await Notifications.find({owner_id:user_id},{},{sort:{createdAt:-1}});
    return n;
}

Notifications.put= async function(user_id,post_id,text){
    
    try{
      const n=new Notifications({owner_id:user_id,post_id:post_id,text:text});
      n.save();
      return true;
    }
    catch(e){
      return false;
    }
    return n;
}


module.exports = Notifications;
