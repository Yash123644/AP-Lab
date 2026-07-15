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
      subject: `Verify your email for AP Lab - Code: ${code}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
          <div style="text-align: center; margin-bottom: 24px; border-bottom: 1px solid #f1f5f9; padding-bottom: 16px;">
            <h2 style="margin: 0; color: #020308; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">AP Lab</h2>
            <p style="margin: 4px 0 0 0; color: #0088ff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">theaplab.org</p>
          </div>
          <h3 style="color: #0f172a; margin: 0 0 16px 0; font-size: 18px; font-weight: 700;">Confirm your registration</h3>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 24px;">Thank you for signing up for AP Lab! To complete your registration and unlock your study dashboard, please enter the following 5-digit verification code on the verification screen:</p>
          <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 36px; font-weight: 800; letter-spacing: 6px; color: #0088ff; background-color: #f8fafc; padding: 12px 30px; border-radius: 12px; border: 1px solid #e2e8f0; display: inline-block;">${code}</span>
          </div>
          <p style="color: #64748b; font-size: 13px; line-height: 1.5; margin-bottom: 24px;">This code will expire in 15 minutes. If you did not sign up for an account on AP Lab, you can safely ignore this email.</p>
          <div style="border-top: 1px solid #f1f5f9; padding-top: 16px; text-align: center; margin-top: 24px;">
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">&copy; 2026 AP Lab. All rights reserved.</p>
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
