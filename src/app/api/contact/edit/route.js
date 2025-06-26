import { connectDB } from '../../../../db';
import { NextResponse } from 'next/server';

export async function PUT(req) {
  try {
    const { email, phone, address } = await req.json();

    if (!email || !phone || !address) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const db = await connectDB();
    await db.execute(
      'UPDATE contact SET email = ?, phone = ?, address = ? WHERE id = 1',
      [email, phone, address]
    );

    return NextResponse.json({ message: 'Contact updated successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating post', error }, { status: 500 });
  }
}
