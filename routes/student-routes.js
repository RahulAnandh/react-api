const express = require('express');

const router = express.Router();
const Student = require('../models/student-model');

router.get('/student', function (req, res) {
    Student.find().then(function (stu) {
        res.send(stu);
        console.log("Responding to Student Request...!");
    })
})

router.post('/student', function (req, res) {
    Student.create(req.body).then(function(stu){
        res.send(stu);
        console.log("Student is Added...!");
    }) 
})

router.put('/student/:id', function (req, res) {
    Student.findByIdAndUpdate({_id:req.params.id},req.body).then(function(stu){
        res.send(stu)
        console.log("Sudent is Updated...!");
    })
})

router.delete('/student/:id', function (req, res) {
    Student.findByIdAndRemove({_id:req.params.id}).then(function(stu){
        res.send(stu)
        console.log("Student Data is removed");
    })
})


module.exports = router;