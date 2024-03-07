const express = require("express");
const app = express();

const p = process.env.Port;
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const collection = require("./models/collection");

const collection1 =require("./models/ExploreCategory");
const nutsitems=require("./models/Nutsitems");
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Emporium")
  .then(() => {
    console.log(" MONGO DB Connection created");
  })
  .catch((error) => {
    console.log(error);
  });


app.get("/drynuts", async (req, res) => {
     collection.find({})
    .then((category) =>{
      console.log(category);
      res.send(category)
    } )
    .catch((error) => res.json(error));
});

app.get("/", async (req, res) => {
  collection1.find({})
 .then((category) =>{
   console.log(category);
   res.send(category)
 } )
 .catch((error) => res.json(error));
});



app.post("/items",async(req,res)=>{
  const {id}=req.body;
 
      nutsitems.find({"id":id}).then((item)=>{
       console.log(item);
      res.send(item);

      }).catch((error)=>{
        console.log(error)
      })
})





app.listen(5000, () => {
  console.log("Server is running  ");
});