import sirv from 'sirv';
import polka from 'polka';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';


const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';


const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/sapper_first";


mongoose
    .connect(MONGO_URI, { useUnifiedTopology: true,useNewUrlParser: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));


const session = require("express-session");
// import * as connectMongo from 'connect-mongo'; depricated
import { default as connectMongoDBSession} from 'connect-mongodb-session';

const MongoDBStore = connectMongoDBSession(session);

var store = new MongoDBStore({
  uri: MONGO_URI,
  collection: 'sessions'
});


var sessionMiddleWare=session({
	key:'express.sid',
	secret: "neoned71",
	resave: false,
	saveUninitialized: true,
	store: store
});

var app=express() // You can also use Express
// for json post form data
app.use(sessionMiddleWare);



// app.use(express.urlencoded({ extended: false }));


const passport = require("../../../src/passport/setup.js");
app.use(passport.initialize());
app.use(passport.session());



app.use(express.json());

//sapper middleware
app.use( sirv('static'),sapper.middleware({ session:(req,res)=>({user: JSON.stringify(req.user)}) }) );



app.listen(PORT, err => {
		if (err) console.log('error', err);
	});
