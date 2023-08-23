const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const citiesSchema = new Schema(
  {
   name: String,
   img: String,
   description: String,
   label: String
  },

);

const City = model("City", citiesSchema);

module.exports = City;
