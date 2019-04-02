const express = require('express');
const router = express.Router();
const Employee = require('../models/employee-model');

router.get('/employee',function(req,res){
Employee.find().then(function(emp){
    console.log("Responded to Employee Request...");
    res.send(emp);

})
})
router.post('/employee',function(req,res){
    Employee.create(req.body).then(function(emp){
        res.send(emp);
        console.log("Employee is Added...");
    })  
})
router.put('/employee/:id',function(req,res){
    Employee.findByIdAndUpdate({_id:req.params.id},req.body).then(function(emp){
        res.send(emp)
        console.log("Employee is Updated...!");
    })
})
router.delete('/employee/:id',function(req,res){
    Employee.findByIdAndRemove({_id:req.params.id}).then(function(emp){
        res.send(emp)
        console.log("Employee is Deleted...!");
    })
})
module.exports = router;