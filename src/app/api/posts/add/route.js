import { connectDB } from '../../../../db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { title, content } = await req.json();
  const db = await connectDB();
  const [result] = await db.execute('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);

  return NextResponse.json({ message: 'Post created', postId: result.insertId });
}
