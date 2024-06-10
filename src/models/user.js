import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    password: String,
    characters: Array,
    obtainedCharacters: Array,
    savedTokens: Number,
    spentTokens: Number,
    sinceLastToken: Number,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.Status || mongoose.model("User", userSchema);

export default User;
