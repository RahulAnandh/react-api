const express = require('express');
const router = express.Router();
const OrderList = require('../models/orderlist-model');

router.get('/orderlist',function(req,res){
    OrderList.find().then(function(emp){
    res.send(emp);
    console.log("Responded to OrderList get Request...");

})
})
router.post('/orderlist',function(req,res){
    OrderList.create(req.body).then(function(emp){
        res.send(emp);
        console.log("Order List is Added...");
    })  
})
router.put('/orderlist/:id',function(req,res){
    OrderList.findByIdAndUpdate({_id:req.params.id},req.body).then(function(emp){
        res.send(emp)
        console.log("Order List is Updated...!");
    })
})
router.delete('/orderlist/:id',function(req,res){
    OrderList.findByIdAndRemove({_id:req.params.id}).then(function(emp){
        res.send(emp)
        console.log("Order List is Deleted...!");
    })
})
module.exports = router;