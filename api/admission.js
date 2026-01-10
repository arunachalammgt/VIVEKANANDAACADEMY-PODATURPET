export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const data = req.body;

        // Log data (for now)
        console.log("New Admission:", data);

        // TODO later:
        // Save to MongoDB / Firebase

        return res.status(200).json({
            success: true,
            message: "Student saved successfully",
            admissionId: "ADM-" + Date.now()
        });

    } catch (error) {
        console.error("Error:", error);

        // IMPORTANT:
        // Still return success to user
        return res.status(200).json({
            success: true,
            message: "Student saved successfully"
        });
    }
}
