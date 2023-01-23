const express = require('express');

const passport = require('./config/passport-jwt-Strategy');

// connect to the DB creted
const db = require('./config/mongoose');

//port number
const port = 300;

const app = express();

//middleware to read the form data
app.use(express.urlencoded());

//middleware to decode the json data
app.use(express.json());

//initialized passport
app.use(passport.initialize());

// connect to main route
app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in connecting to port : ${err}`);
    }
    else{
        console.log(`Connect to port: ${port}`);
    }

});
