import { connectDB } from '../../../../db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await connectDB();
    const [rows] = await db.execute('SELECT * FROM mission WHERE id = 1');
    return NextResponse.json(rows[0] || {});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching data', error }, { status: 500 });
  }
}
