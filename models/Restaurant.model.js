const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const restaurantsSchema = new Schema(
  {
   name: String,
   number: Number
  },

);

const Restaurant = model("Restaurant", restaurantsSchema);

module.exports = Restaurant;