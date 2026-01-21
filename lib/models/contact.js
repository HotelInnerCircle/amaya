import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true },
);

const Contact = mongoose.models.contact || mongoose.model('contact', Schema);
export default Contact;
