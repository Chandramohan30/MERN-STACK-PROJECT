
const mongoose=require("mongoose");
const structure=new mongoose.Schema({
    id:"String",
    src:"String",
    name:"String",
    quant:"String",
    price:"String"

},{collection:"Almonds"});

const collection=mongoose.model("Almonds",structure);
module.exports=collection;