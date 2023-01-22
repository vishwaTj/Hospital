const express = require('express');
const app = express();
const port = 300;

app.use(
    express.urlencoded({extended:true})
);

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`error in connecto to port : ${err}`);
    }else{
        console.log(`The server is up and running on port : ${err}`);
    }
});