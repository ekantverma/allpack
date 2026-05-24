import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_APP_PASSWORD;

if (!gmailUser || !gmailPassword) {
  throw new Error(
    "❌ Missing Gmail credentials in .env file"
  );
}

// Create Transporter
export const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: gmailUser,
    pass: gmailPassword,
  },

  tls: {
    rejectUnauthorized: false,
  },
});

// Email Config
export const emailConfig = {
  fromEmail:
    process.env.FROM_EMAIL || gmailUser,

  fromName:
    process.env.FROM_NAME || "AllPak Packaging",

  gmailUser,
};

// Test Email Connection
export const testConnection = async (): Promise<boolean> => {
  try {
    await transporter.verify();

    console.log(`
========================================
✅ Email Service Connected Successfully
📧 Gmail: ${gmailUser}
========================================
`);

    return true;
  } catch (error) {
    console.error(`
========================================
❌ Email Service Connection Failed
========================================
`);

    console.error(error);

    return false;
  }
};