const passport = require("passport");

export function get(req,res){
    console.log("inside login get");
	res.end("abcs");
}


export const post=function(req,res){
    console.log(req.body);	


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
    })(req, res);


    // res.end(JSON.stringify(req.body));
}


// ,body:JSON.stringify({username,password}