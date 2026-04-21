"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const description = formData.get("description") as string;

    if (!name || !email || !description) {
        return { error: "Please fill in all fields" };
    }

    try {
        // NOTE: By default, Resend only allows sending to your own email address 
        // until you verify a custom domain.
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL || "zahinp11@gmail.com"],
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${description}`,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { error: error.message };
        }

        return { success: true };
    } catch (err: any) {
        console.error("Server Action Error:", err);
        return { error: "Internal Server Error. Please try again later." };
    }
}
