import db from "../lib/db.js";
import Admission from "../lib/Admission.js";
import Student from "../lib/Student.js";

export default async function handler(req, res) {
  await db;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { admissionId } = req.body;

  const admission = await Admission.findById(admissionId);
  if (!admission) {
    return res.status(404).json({ message: "Admission not found" });
  }

  const student = await Student.create({
    name: admission.studentName,
    dob: admission.dob,
    age: admission.age,
    gender: admission.gender,
    school: admission.school,
    standard: admission.admissionClass,
    medium: admission.medium,
    address: admission.address,

    parent: admission.guardianName,
    mobile: admission.mobile,
    alt: admission.alternate,
    occupation: admission.occupation,

    subjects: admission.subjects,
    batch: admission.batch,
    photo: admission.photo
  });

  admission.status = "APPROVED";
  await admission.deleteOne();

  return res.status(200).json({
    success: true,
    student
  });
}
