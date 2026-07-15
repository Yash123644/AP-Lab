import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { uid, email } = await req.json();

    if (!uid || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Generate a random 5-digit code
    const code = Math.floor(10000 + Math.random() * 90000).toString();

    // Store in Firestore verificationCodes collection
    const db = getAdminDb();
    await db.collection("verificationCodes").doc(uid).set({
      code,
      email,
      createdAt: new Date(),
    });

    // Logging to console for quick developer testing (helps if SMTP is not configured yet)
    console.log("\n------------------- AP LAB VERIFICATION CODE -------------------");
    console.log(`User UID: ${uid}`);
    console.log(`User Email: ${email}`);
    console.log(`Generated OTP: ${code}`);
    console.log("----------------------------------------------------------------\n");

    const smtpPass = process.env.SMTP_PASS;
    if (!smtpPass) {
      console.warn("SMTP_PASS is not configured in environment variables. Email was not sent.");
      return NextResponse.json({
        success: true,
        warning: "Developer mode: SMTP_PASS env variable is missing, check server logs for verification code.",
      });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: parseInt(process.env.SMTP_PORT || "465") === 465,
      auth: {
        user: process.env.SMTP_USER || "ap.labbss@gmail.com",
        pass: smtpPass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"AP Lab" <${process.env.SMTP_USER || "ap.labbss@gmail.com"}>`,
      to: email,
      subject: "Welcome to AP Lab!",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 30px; border: 1px solid #27272a; border-radius: 16px; background-color: #09090b; color: #f4f4f5; text-align: center;">
          <div style="margin-bottom: 30px; border-bottom: 1px solid #27272a; padding-bottom: 20px;">
            <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">AP Lab</h2>
            <p style="margin: 4px 0 0 0; color: #38bdf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">theaplab.org</p>
          </div>
          <h3 style="color: #ffffff; margin: 0 0 16px 0; font-size: 18px; font-weight: 700; text-align: left;">Verify your email</h3>
          <p style="font-size: 14px; line-height: 1.6; color: #a1a1aa; margin-bottom: 30px; text-align: left;">Welcome to AP Lab! To complete your registration, please enter the following 5-digit verification code on the verification screen:</p>
          <div style="margin: 32px 0;">
            <span style="font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #ffffff; background-color: #18181b; padding: 16px 32px; border-radius: 12px; border: 1px solid #27272a; display: inline-block; padding-left: 40px;">${code}</span>
          </div>
          <p style="color: #71717a; font-size: 12px; line-height: 1.5; margin-bottom: 30px; text-align: left;">This code is valid for 15 minutes. If you did not request this code, you can safely ignore this email.</p>
          <div style="border-top: 1px solid #27272a; padding-top: 20px; text-align: center; margin-top: 30px;">
            <p style="margin: 0; color: #52525b; font-size: 11px;">&copy; 2026 AP Lab. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in send-otp API:", error);
    return NextResponse.json({ error: error?.message || "Internal server error" }, { status: 500 });
  }
}
