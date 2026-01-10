import db from "../lib/db.js";
import Admission from "../lib/Admission.js";

export default async function handler(req, res) {
  await db;

  if (req.method === "POST") {
    const admission = await Admission.create(req.body);
    return res.status(201).json(admission);
  }

  if (req.method === "GET") {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    return res.status(200).json(admissions);
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
