
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
//set up express app

mongoose.connect('mongodb://heroku_4bnk53kd:appukuttan234@ds229826.mlab.com:29826/heroku_4bnk53kd');
//connect to mongodb
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// we need body parser to extract the request data

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Orgin, X-Requested-With, Content-Type, Accept, Authorization")
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
})
app.use('/api',require('./routes/employee-routes'))
app.use('/api',require('./routes/student-routes'))
app.use('/api',require('./routes/product-routes'))
app.use('/api',require('./routes/orderlist-routes'))
//initilize requests
app.listen(3001 || process.env.port,function(){
    console.log("Waiting for requests...!");
})
//listen for requests

