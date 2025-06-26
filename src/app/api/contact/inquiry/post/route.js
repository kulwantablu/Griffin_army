import { connectDB } from '../../../../../db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { firstname, lastname, email, phone, type, message } = await req.json();
  const db = await connectDB();

  const [result] = await db.execute(
    'INSERT INTO inquiry (firstname, lastname, email, phone, type, message, created_at) VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)',
    [firstname, lastname, email, phone, type, message]
  );

  return NextResponse.json({ message: 'Inquiry created', postId: result.insertId });
}
