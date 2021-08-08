const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversation_id: {
      type: String,
      required:true
    },
    sender_id: {
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

module.exports = mongoose.model("messages", MessageSchema);
