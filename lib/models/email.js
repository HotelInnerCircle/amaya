import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Email || mongoose.model("Email", EmailSchema);
