const mongoose = require("mongoose");
const filesSch = require("./files");
const DirectorySch = new mongoose.Schema(
    {
        name: {
            type: String,
             
        },
        owner: {
            type: mongoose.Schema.ObjectId,
            required: true,
            
        },
        date_created: {
            type: Date,
            default: Date.now
        }
        
    },
    { strict: false }
);

DirectorySch.index({owner:1,name:1},{unique:true});
module.exports = Directories = mongoose.model("directories", DirectorySch);
