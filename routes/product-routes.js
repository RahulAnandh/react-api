const express = require('express');
const router = express.Router();
const Product = require('../models/product-model');

router.get('/product',function(req,res){
    Product.find().then(function(pro){
        console.log("Sending Products...!");
    res.send(pro);
    

})
})
router.post('/product',function(req,res){
    Product.create(req.body).then(function(pro){
        res.send(pro);
        console.log("Product is added...!");
    })  
})
router.put('/product/:id',function(req,res){
    Product.findByIdAndUpdate({_id:req.params.id},req.body).then(function(pro){
        res.send(pro)
        console.log("Product is Updated...!");
    })
})
router.delete('/product/:id',function(req,res){
    Product.findByIdAndRemove({_id:req.params.id}).then(function(pro){
        res.send(pro)
        console.log("Product is Deleted...!");
    })
})
module.exports = router;