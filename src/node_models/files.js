const mongoose = require("mongoose");
const FilesSch = new mongoose.Schema(
    {
        name: {
            type: String
        },
        directory: {
            type: mongoose.Schema.ObjectId,
            required: true,
            
        },
        owner: {
            type: mongoose.Schema.ObjectId,
            required: true,
            
        },
        
        // date_created: {
        //     type: Date,
        //     default: Date.now
        // },
        data:[]
    },
    { strict: false }
);

// module.exports = FilesSch;
FilesSch.index({directory:1,name:1},{unique:true});
module.exports = Files = mongoose.model("files", FilesSch);
