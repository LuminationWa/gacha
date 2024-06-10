import mongoose, { Schema } from "mongoose";

const characterSchema = new Schema(
  {
    name: String,
    picture: String,
    createdBy: mongoose.Schema.Types.ObjectId,
    tokenAmount: Number,
    lastTokenAdded: Number, 
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.models.Status || mongoose.model("Character", characterSchema);

export default Character;