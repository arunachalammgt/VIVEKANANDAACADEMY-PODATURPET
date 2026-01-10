import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  dob: String,
  age: Number,
  gender: String,
  school: String,
  standard: String,
  medium: String,
  address: String,

  parent: String,
  mobile: String,
  alt: String,
  occupation: String,

  subjects: String,
  batch: String,
  photo: String,

  joinedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
