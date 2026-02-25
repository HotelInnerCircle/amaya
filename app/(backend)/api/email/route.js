import { NextResponse } from "next/server";
import Email from "../../../../lib//models/email";
import { ConnectDB } from "../../../../lib/config/db";

/* ✅ POST: Save email */
export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const exists = await Email.findOne({ email: email.toLowerCase() });
    if (exists) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }

    await Email.create({ email });

    return NextResponse.json(
      { message: "Email saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/* ✅ GET: Fetch all emails */
export async function GET() {
  try {
    await ConnectDB();

    const emails = await Email.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: emails.length,
        data: emails, // ✅ IMPORTANT
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/email error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
