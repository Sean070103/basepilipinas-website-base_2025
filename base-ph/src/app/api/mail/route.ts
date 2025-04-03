import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists" : "Missing");

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Missing email credentials");
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, contact, subject, date, time } = await req.json();

    if (!name || !email || !contact || !subject || !date || !time) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }

    const senderInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Meeting Confirmation: ${subject}`,
      text: `Dear ${name},\n\nYour meeting has been scheduled.\n\n📅 Date: ${date}\n⏰ Time: ${time}\n📞 Contact: ${contact}\n\nThank you!\n\nBest regards,\nThe Team`,
    });

    const defaultReceiverInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Meeting Confirmation: ${subject}`,
      text: `A new meeting has been scheduled.\n\n📅 Date: ${date}\n⏰ Time: ${time}\n📞 Contact: ${contact}\n\nThank you!\n\nBest regards,\nThe Team`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!", senderInfo, defaultReceiverInfo },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
