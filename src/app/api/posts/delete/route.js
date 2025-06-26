import { connectDB } from '../../../../db';
import { NextResponse } from 'next/server';

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    const db = await connectDB();
    await db.execute('DELETE FROM posts WHERE id = ?', [id]);

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting post', error }, { status: 500 });
  }
}
