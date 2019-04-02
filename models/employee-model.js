const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = new Schema({

    FirstName:{type:String,required:[true,'Name field is requered']},
    MiddleName:{type:String},
    LastName:{type:String},
    Address:{type:String,requered:[true,'Address Field is requered']},
    DateOfBirth:{type:String,requered:[true,'Date of birth Field is requered']},
    PinCode:{type:String,requered:[true,'Pin Code Field is Requered']},
    District:{type:String,requered:[true,'District Field is requered']},
    State:{type:String,requered:[true,'State Field is requered']},
    Nationality:{type:String,requered:[true,'Natinalaity Field is requered']},
    Gender:{type:String,requered:[true,'Gender Field is requered']},

});
const  Employee = mongoose.model('employee',employeeSchema);

module.exports = Employee;

