const passport = require("passport");
const { v4: uuidv4 } = require('uuid');
var validator = require("email-validator");
const bcrypt = require("bcrypt");
const User = require("../../../src/node_models/users");

export function get(req,res){
    console.log("inside login get");
	res.end("abcs");
}


export const post=function(req,res,next){
    console.log(req.body);
    if(validator.validate(req.body.email) && req.body.password.length>6){

        const salt = bcrypt.genSaltSync(2);
        
        const hashedPassword =  bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({ email:req.body.email,password:req.body.password, password_hash:hashedPassword, username:req.body.username,role:"normal"});

        newUser.save().then(async function(){

        performLogin(req,res,next);

        }).catch(function(err){
            console.log(err);
            res.json({status:"failed",message:"User already registered."});
        });
    }
    else{
        res.status(400).json({status:"failed",message:"Improper email or password"});
    }

   


    // res.end(JSON.stringify(req.body));
}


// ,body:JSON.stringify({username,password}

function performLogin(req, res, next)
{
    //this callback function is called after setup.js file function has returned, its just later in that pipeline, actually, the immediate next...
    passport.authenticate("local_strategy_normal", function(err, user, info) {
        console.log("Entered authenticate");
        if (err) {
            console.log("err authenticate"+err);
            return res.status(400).json({ status:"failed",message:err });
        }

        if (!user) {
            console.log(info);
            return res.status(400).json({ status:"failed",message:info.message });
        }

        req.logIn(user, function(err) {
            if (err) {
                console.log("err login");
                return res.status(400).json({ status:"failed",message : err });
            }
            console.log("done authenticate");
            const { password, updatedAt,password_hash, ...other } = user._doc;
            return res.status(200).json({ status:"success",message: `logged in ${user.id}`,user_id:user.id,user:{...other,id:other._id}});
        });
    })(req, res, next);
}