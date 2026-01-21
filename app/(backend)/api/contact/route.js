import { NextResponse } from 'next/server';
import { ConnectDB } from '../../../../lib/config/db';
import Contact from '../../../../lib/models/contact';

/* ✅ POST: Save contact */
export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();
    const { name, number, message } = body;

    if (!name || !number) {
      return NextResponse.json(
        { message: 'Name and Number are required' },
        { status: 400 },
      );
    }

    // Phone validation (10 digits starts with 6-9)
    const phone = String(number).replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { message: 'Invalid phone number (must be 10 digits, start with 6-9)' },
        { status: 400 },
      );
    }

    const newContact = await Contact.create({
      name,
      number: phone,
      message: message || '',
    });

    return NextResponse.json(
      { message: 'Contact saved successfully', contact: newContact },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

/* ✅ GET: Fetch all contacts */
export async function GET() {
  try {
    await ConnectDB();

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, count: contacts.length, contacts },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 },
    );
  }
}
