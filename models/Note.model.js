const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const notesSchema = new Schema(
  {
    plan: { type: mongoose.Schema.Types.ObjectId,
        ref: "Plan" },
   note: String,
   user: { type: mongoose.Schema.Types.ObjectId,
    ref: "User" }
  },

);

const Note = model("Note", notesSchema);

module.exports = Note