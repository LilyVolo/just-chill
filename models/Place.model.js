const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placesSchema = new Schema(
  {
  
formatted_address: String,
geometry: Object,
name: String,
photos: String,
rating: Number,
types: Array,
user_ratings_total: Number,
services: Array,
budget: String,
city: { type: mongoose.Schema.Types.ObjectId,
    ref: "City" }
  },

);

const Place = model("Place", placesSchema);

module.exports = Place;