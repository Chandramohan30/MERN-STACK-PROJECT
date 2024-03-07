const mongoose = require("mongoose");

const structure = new mongoose.Schema(
  {
    id: String,
    src: String,
    name: String,
  },
  { collection: "ExploreCategories" }
);

const collection1 = mongoose.model("ExploreCategories", structure);
module.exports = collection1;
