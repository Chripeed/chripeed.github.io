import type { APIRoute } from "astro";
import { sendEmail } from "../../../utils/email";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  // 1. Get form data
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string | null;
    const phone = formData.get("phone") as string | null;
    const email = formData.get("email") as string | null;
    const subject = formData.get("subject") as string | null;
    const message = formData.get("message") as string | null;

    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const htmlContent = `
    <h3>New Contact Request</h3>
    <p><strong>Name:</strong> ${name ?? "No name provided"}</p>
    <p><strong>Phone:</strong> ${phone ?? "No phone provided"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <div>${message}</div>
  `;

    await sendEmail({ to: email, subject, html: htmlContent });

    // Return a simple JSON success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Send Email Error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
};
