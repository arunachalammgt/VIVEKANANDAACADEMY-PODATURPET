import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
  studentName: String,
  dob: String,
  age: Number,
  gender: String,
  school: String,
  medium: String,
  admissionClass: String,
  address: String,

  guardianType: String,
  guardianName: String,
  mobile: String,
  alternate: String,
  occupation: String,

  grade: String,
  subjects: String,
  batch: String,

  photo: String,
  status: {
    type: String,
    default: "PENDING" // PENDING | APPROVED | REJECTED
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Admission ||
  mongoose.model("Admission", AdmissionSchema);
