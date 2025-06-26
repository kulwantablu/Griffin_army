import { connectDB } from '../../db';
import { NextResponse } from 'next/server';

export async function DELETE(req) {
  const { id } = await req.json();

  const db = await connectDB();
  await db.execute('DELETE FROM posts WHERE id = ?', [id]);

  return NextResponse.json({ message: 'Post deleted successfully' });
}
