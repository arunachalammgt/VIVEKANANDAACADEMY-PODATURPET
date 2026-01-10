import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
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
  photo: String
}, { timestamps: true });

export default mongoose.models.Admission || mongoose.model("Admission", admissionSchema);
