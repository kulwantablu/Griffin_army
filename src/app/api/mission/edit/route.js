import { connectDB } from '../../../../db';
import { NextResponse } from 'next/server';

export async function PUT(req) {
  try {
    const { heading, detail } = await req.json();

    if (!heading || !detail) {
      return NextResponse.json({ message: 'mission required fields' }, { status: 400 });
    }

    const db = await connectDB();
    await db.execute(
      'UPDATE mission SET heading = ?, detail = ? WHERE id = 1',
      [heading, detail]
    );

    return NextResponse.json({ message: 'mission updated successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating post', error }, { status: 500 });
  }
}
