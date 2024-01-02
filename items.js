const mongoose=require('mongoose');
const itemSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand: String,
    category:String
})
module.exports = mongoose.model('items',itemSchema)