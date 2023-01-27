const mongoose = require("mongoose");

const reactSchema = mongoose.Schema({
    topic: {type:String, required:true},
    desc: {type:String, required:true},
    video: {type:String, required:true},
    img: {type:String, required:true},
    category: {type:String, required:true}, 
    price: {type:Number, required:true}
    
});

const ReactModel = mongoose.model("react", reactSchema);

module.exports = { ReactModel };