import db from "../lib/db.js";
import Student from "../lib/Student.js";

export default async function handler(req, res) {
  await db;

  if (req.method === "GET") {
    const students = await Student.find().sort({ joinedAt: -1 });
    return res.status(200).json(students);
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
