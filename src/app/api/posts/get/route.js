import { connectDB } from '../../../../db';
import { NextResponse } from 'next/server';

export async function GET() {
  const db = await connectDB();
  const [rows] = await db.execute('SELECT * FROM posts ORDER BY id DESC');
  return NextResponse.json(rows);
}
