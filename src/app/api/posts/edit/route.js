import { connectDB } from '../../../../db';
import { NextResponse } from 'next/server';

export async function PUT(req) {
  try {
    const { id, title, content } = await req.json();

    if (!id || !title || !content) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const db = await connectDB();
    await db.execute('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id]);

    return NextResponse.json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating post', error }, { status: 500 });
  }
}
