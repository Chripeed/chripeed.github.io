import nodemailer from "nodemailer";

type SendEmailOptions = {
  to: string;
  subject: string;
  html: string;
};

/**
 * Send an email using nodemailer with credentials from environment variables.
 */
export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: import.meta.env.EMAIL_HOST,
    port: Number(import.meta.env.EMAIL_PORT),
    secure: Number(import.meta.env.EMAIL_PORT) === 465, // true if using port 465
    auth: {
      user: import.meta.env.EMAIL,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  const { to, subject, html } = options;
  // "from" can be your same email or something like "My Site <noreply@mysite.com>"
  const from = import.meta.env.EMAIL;

  return new Promise((resolve, reject) => {
    transporter.sendMail({ from, to, subject, html }, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        reject(err);
      } else {
        console.log("Email sent:", info.messageId);
        resolve();
      }
    });
  });
}
