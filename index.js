const express = require('express');
const app = express();
const port = 300;
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');


app.use(
    express.urlencoded({extended:true})
);

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`error in connecto to port : ${err}`);
    }else{
        console.log(`The server is up and running on port : ${port}`);
    }
});