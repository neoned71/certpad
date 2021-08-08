const bcrypt = require("bcrypt");
const User = require("../node_models/users");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { v4: uuidv4 } = require('uuid');
const salt= '$2b$04$73qlhfyU1EO3bsEyyK.sF.';
var crypto = require('crypto');//using sha 256 hash for storing password!

console.log(User);
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
    	// console.log("setup.js:desialize:"+err);
        done(err, user);
    });
});

passport.use('local_strategy_normal',
    new LocalStrategy({ usernameField: "email",passwordField:"password",passReqToCallback : true }, async function(req,email, password, done){
        const hashedPassword =  bcrypt.hashSync(req.body.password, salt);

        console.log("setup.js: inside localstrategy");
        User.findOne({ email: email,password:password}).then(user => {
            if (!user) {
                console.log("setup.js:user not found");
                return done(null, false, { message: "Please Sign Up" });
                
            } else {
                if(user.password==password){
                    console.log("setup.js:user found");
                    user.token=uuidv4();
                    user.save();
                    return done(null, user);
                }
                else{
                    return done(null, false, { message: "wrong password" });
                }
                
            }
        })
        .catch(err => {
            console.log("setup.js:"+err);
            return done(null, false, { message: err });
        });
    })
);

module.exports = passport;