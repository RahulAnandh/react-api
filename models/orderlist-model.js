const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderListSchema = new Schema({

    ProductName:{type:String},
    Address:{type:String},
    Location:{type:String},
    Date:{type:Date},
    Town:{type:String},
    PinCode:{type:Number},
});
const  OrderList = mongoose.model('employee',orderListSchema);

module.exports = OrderList;

