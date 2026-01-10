import db from "../lib/db.js";
import Admission from "../lib/Admission.js";

export default async function handler(req, res) {
  await db; // connect MongoDB

  if (req.method === "POST") {
    try {
      const admission = await Admission.create(req.body);
      res.status(201).json(admission);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
    return;
  }

  if (req.method === "GET") {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.status(200).json(admissions);
    return;
  }

  res.status(405).json({ message: "Method not allowed" });
}
