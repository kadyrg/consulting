"use server";

import { ContactFormSchema } from "@/features/contact";
import nodemailer from "nodemailer";

export async function sendContactEmail(data: ContactFormSchema) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${data.name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: data.email,
      subject: "New Contact Message",
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`,
    });
    return { success: true };
  } catch (error) {
    console.error("Email send failed:", error);
    return { success: false };
  }
}
