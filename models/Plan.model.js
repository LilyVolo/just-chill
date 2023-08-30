const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const plansSchema = new Schema(
  {
places: [
    {
        type: Schema.Types.ObjectId,
        ref: "Place"
    }
],
restaurants:  [
    {
        type: Array,
    }
],
city: { type: mongoose.Schema.Types.ObjectId,
    ref: "City" },
user: { type: mongoose.Schema.Types.ObjectId,
        ref: "User" }
  },
);

const Plan = model("Plan", plansSchema);

module.exports = Plan;