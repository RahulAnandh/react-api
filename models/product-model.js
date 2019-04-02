const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({

    Name:{type:String,required:[true,'Name field is requered']},
    Proparties:{type:String},
    Price:{type:String},
    OfferPrice:{type:String},
    BestBeforeUse:{type:String},
    MakeTime:{type:String},
    Incredeants:{type:String},
    Cooked:{type:Boolean},
});
const  Product = mongoose.model('product',productSchema);

module.exports = Product;

