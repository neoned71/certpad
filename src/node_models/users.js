        const mongoose = require("mongoose");

        const UserSch = new mongoose.Schema(
            {
                name: {
                    type: String
                },
                token: {
                    type: String
                },
                organization:{type:String,default:"Not defined!"},
                postt:{type:String,},
                email: {
                    type: String,
                    required: true,
                    unique: true
                },
                email_is_verified: {
                    type: Boolean,
                    default: false
                },
                password_hash: {
                    type: String,
                    default: false
                },
                password: {
                    type: String,
                    default: false
                },
              
               
                
              
                profilePicture: {
                  type: String,
                  default: "",
                },
                logo: {
                  type: String,
                  default: "/images/blank.jpg",
                },
                signature: {
                  type: String,
                  default: "/images/blank.jpg",
                },

               
               
            },
            { strict: false,minimize:false }
        );

        module.exports = User = mongoose.model("users", UserSch);
