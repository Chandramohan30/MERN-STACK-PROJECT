const mongoose=require("mongoose");
//this for dry nuts
const structure=new mongoose.Schema({
    id:String,
    src:String,
    name:String
}, {collection:"Drynuts"} );

const collection = mongoose.model("Drynuts",structure);
module.exports = collection;
