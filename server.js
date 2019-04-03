
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectID;
const app = express();

//set up express app

mongoose.connect('mongodb://localhost/dbredland');
//connect to mongodb
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// we need body parser to extract the request data
var db;
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://heroku_4bnk53kd:vvj1ecl9or01o03a63jp214prd@ds229826.mlab.com:29826/heroku_4bnk53kd",function (err,client){
    if(err){
        console.log(err);
        process.exit(1);
    }
})

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
// app.listen(3001 || process.env.port,function(){
//     console.log("Waiting for requests...!");
// })
//listen for requests
db = client.db();
console.log("DB connection is ready");
var server = app.listen(process.env.PORT || 8080 , function (){
    var port = server.address().port;
    console.log("pp Now Running On Port:",port);
})
