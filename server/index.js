//Importing Env Variables
require ("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";

//config 
import googleAuthConfig from "./config/google.config";

// microservices route
import Auth from "./API/Auth";


// Database connection 
import ConnectDB from "./database/connection";

const zomato=express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(session({secret: "secret",

    resave: true,
    saveUninitialized: true
}));
zomato.use(passport.session());

// passport configuration
 
googleAuthConfig(passport);

// Application Route
zomato.use("/auth",Auth);

zomato.get("/",(req,res)=>{
    res.json({message:"setup success"})
});


zomato.listen(5000,()=>ConnectDB().then(()=>console.log("server is running")).catch(()=>console.log("server is running but database connection failed...")));